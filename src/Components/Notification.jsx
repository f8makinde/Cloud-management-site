import React from 'react'
import { FaCheck } from 'react-icons/fa'
const Notification = () => {
  return (
         <div className='flex px-2 gap-6'>
             <div className='text-green-600 font-thin pt-1'>
                <FaCheck size={20}/>
             </div>
             <div>
                <h1 className='text-lg font-bold'>Notifications</h1>
                <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus dolorum corrupti voluptates! Quidem, libero eaque.</p>
             </div>
         </div>
  )
}

export default Notification
