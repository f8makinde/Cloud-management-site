import React from 'react'
import  Grid   from './data'
const All = () => {
  return (
    <div className='w-full bg-white py-4 pb-24'>
    <div className='max-w-[1240px] mx-auto'>
    <div  className='text-center'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Trusted by developers across the world</h1>
        <p className='text-lg py-3'>A server is a computer program or device that provides a service to another computer program and its user, also known as the client. In a data center, the physical computer that a server program runs on is also frequently referred to as a server.That machine might be a dedicated server or it might be used for other purposes.</p>
        <div className='grid md:grid-cols-3 gap-2 w-[100%] lg:px-0 md:px-2 sm:px-3 px-4'>
        {Grid.map((grids) => {
            const {text, id, smallText} = grids
          return  (
                <div>
                <div key={id} className='bg-white shadow-2xl border py-8 rounded-lg'>
                    <h1 className='text-6xl font-bold text-indigo-700 pb-2'>{text}</h1>
                    <p className='text-gray-400 font-normal'>{smallText}</p>
                </div>
            </div>
            )
        })}
      </div>
    </div> 
    </div>
    </div>
  )
}

export default All
