import React from 'react'
import { useRef,useEffect,useState } from 'react'
import WaveSurfer from 'wavesurfer.js'
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";
import { CiVolumeHigh } from "react-icons/ci";
import { CiVolume } from "react-icons/ci";
import { CiVolumeMute } from "react-icons/ci";

const formWaveSurferOptions = (ref) => ({
    container: ref,
    waveColor:'white',
    progressColor:'green',
    cursorColor: 'transparent',
    responsive:'true',
    height:40,
    normalize: true,
    backend:'WebAudio',
    barWidth: 2,
    barGap:4
})

function formatTime(seconds){
    let date = new Date(0)
    date.setSeconds(seconds)
    return date.toISOString().substr(11,8)
}

const AudioPlayer = ({audioFile}) => {

    const waveFormRef = useRef(null)
    const wavesurfer = useRef(null)

    const [playing,setPlaying] = useState(false)
    const [volume,setVolume] = useState(0.5)
    const [muted,setMuted] = useState(false)
    const [duration,setDuraction] = useState(0)
    const [currentTime,setCurrentTime] = useState(0)
    const [audioFileName,setAudioFileName] = useState('')

    useEffect(()=>{
        const options = formWaveSurferOptions(waveFormRef.current)
        wavesurfer.current = WaveSurfer.create(options)
        wavesurfer.current.load(audioFile)
        wavesurfer.current.on('ready', () => {
            setVolume(wavesurfer.current.getVolume())
            setDuraction(wavesurfer.current.getDuration())
            setAudioFileName(audioFile.split('/').pop())
        })
        wavesurfer.current.on('audioprocess',()=>{
            setCurrentTime(wavesurfer.current.getCurrentTime())
        })
        return () => {
            wavesurfer.current.un('audioprocess')
            wavesurfer.current.un('ready')
            wavesurfer.current.destroy()
        }
        
    },[audioFile])

    const handlePlayPause = () => {
        setPlaying(!playing);
        wavesurfer.current.playPause()
    }
    
    const handleVolumeChange = (e) => {
        setVolume(e)
        wavesurfer.current.setVolume(e)
        setMuted(e === 0)
    }
    
    const handleMute = () => {
        setMuted(!muted)
        wavesurfer.current.setVolume(muted ? volume : 0)
    }

    const handleVolumeUp = () => {
        handleVolumeChange(Math.min(volume + 0.1,1))
    }

    const handleVolumeDown = () => {
        handleVolumeChange(Math.min(volume - 0.1,1))
    }
    
    return (
    <div>
        <div id='waveform' 
            ref={waveFormRef} 
            style={{width:"100%"}}
            className='mb-4'
            >
        </div>
        <button className='mr-4 text-green-700' onClick={handlePlayPause}>
            {playing ? <CiPause1/>: <CiPlay1/>}
        </button>
        <input
            type='range'
            id="volume"
            name="volume"
            min="0"
            max="1"
            step='0.05'
            className='mx-4 w-24 bg-green-700'
            value={ muted ? 0 : volume}
            onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
            /> 
        <div className='audio-info'>
            <span className='text-green-700'>
                {formatTime(currentTime).slice(3)}
            </span>
        </div>
    </div>
  )
}

export default AudioPlayer