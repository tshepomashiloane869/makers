import React from 'react'
import Banner from '../Components/Banner'
import TimelineVoiceNote from '../Components/TimelineVoiceNote'

const Homepage = () => {
  return (
    <div className='h-screen'>
      <Banner/>
      <TimelineVoiceNote/>
      <TimelineVoiceNote/>
    </div>
  )
}

export default Homepage