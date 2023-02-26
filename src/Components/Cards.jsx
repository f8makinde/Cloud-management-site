import React from 'react'

const Cards = ({title, text, btn, icon}) => {
  return (
            
                <div className='px-8 mt-16'>
                    <h2 className='w-16 bg-indigo-700 text-white rounded-lg mt-[-4rem] p-4'>{icon}</h2>
                    <h1 className='text-2xl font-bold py-4'>{title}</h1>
                     <p className='text-gray-600 text-xl'>{text}</p>
                     <span className='flex items-center gap-2 bg-slate-200 p-4 text-indigo-500'>
                     <button className='bg-transparent text-indigo-500'>{btn}</button>
                     <FaArrowRight />
                      </span>
                </div>
  )
}

export default Cards
