import React from 'react'
import cyberImg from '../assets/cyber-bg.png'
// import {
//     CloudUploadIcon,
//     DatabaseIcon,
//     PaperAirplaneIcon,
//     ServerIcon,
// } from 'react-icons/hi'
const Hero = () => {
  return (
    <div className='m-0 bg-gray-200 w-full mt-12 md:py-28 py-6 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
             
            <div className='flex flex-col gap-3 mx-auto justify-center'>
              <h1 className='text-2xl text-gray-900'>Unique sequence and production</h1> 
              <h2 className='text-5xl md:text-6xl font-bold'>Cloud Management</h2> 
              <p className='text-gray-600'>This is our Tech brand.</p>
              <button className='py-3 md:w-[70%] w-full rounded-md'>Get started</button>
            </div>
         
            <div className='md:py-0 md:my-0 my-32'>
                <img src={cyberImg} alt='' />
            </div>
        </div>
        {/* <div>
            <h1>Data Service</h1>
            <div>
                <p><CloudUploadIcon />Security</p>
                <p><DatabaseIcon />Dashboard</p>
                <p><PaperAirplaneIcon />Server</p>
                <p><ServerIcon />API</p>
            </div>
        </div> */}
    </div>
  )
}

export default Hero
