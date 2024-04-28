import React from 'react'
import board from "../assets/board.jpg"


const Banner = () => {
  return (
    <div className='relative'>
      <div className='bg-green-600 h-[12rem] flex items-center justify-center'>
        <h1>banner</h1>
      </div>
      <div className='bg-white w-36 -mt-8 ml-4 rounded-md p-2 font-extrabold'>
        <span className='text-green-600'>Top 10 Charts</span>
      </div>
    </div>
  )
}

export default Banner