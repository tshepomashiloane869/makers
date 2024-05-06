import React from 'react'
import AudioPlayer from './AudioPlayer'
import testNote from '../assets/test.mp3'

function TimelineVoiceNote() {
  const voiceNotes = [{title:"Hello World",postedBy:"Tshepo Mashiloane",datePosted:"10 minutes ago",likes:"10", comments:"3"}]
  return (
    <div className='mx-4 my-12 border-b rounded-sm py-8 border-green-700'>
        <div className='flex align-center justify-between max-w-md mx-auto'>
          <div>
            <AudioPlayer audioFile={testNote}/>
            <div>
            </div>
          </div>
          <div className=''> 
            {
                voiceNotes.map((vn)=>{
                    return(
                        <div>
                            <h1 className='text-xl text-white font-semibold '>{vn.postedBy}</h1>
                            <p className='text-white'>{vn.title}</p>
                            <p className='font-extralight text-sm italic text-green-700'>{vn.datePosted}</p>
                        </div>
                    )
                })
            }
          </div>
        </div>
    </div>
  )
}

export default TimelineVoiceNote