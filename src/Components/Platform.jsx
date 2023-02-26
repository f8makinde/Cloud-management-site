import React from 'react'
import Notification from './Notification'

const Platform = () => {
  return (
    <div className='w-full my-48'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='flex flex-col gap-6 text-center'>
                <h1 className='md:text-5xl text-4xl font-bold'>All-in-one platform</h1>
                <p className='text-2xl text-gray-500'>A technology platform is the foundation for building and running business applications. The platform allows users to run their applications smoothly without worrying about the technology that supports them.</p>
            </div>
            <div className='mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            </div>

        </div>
    </div>
  )
}

export default Platform
