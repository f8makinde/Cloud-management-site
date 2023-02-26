import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
   const [nav, setNav] = useState(false)
   const handleNav = () => {
     setNav(!nav)
   }
  return (
    <nav className='bg-gray-200 p-4 fixed w-full top-0 shadow-lg'>
        <div className='md:flex justify-between hidden'>
        <div className='flex px-2 items-center'>
            <h1 className='text-2xl md:text-3xl font-bold'>F8_Cloud.</h1>
            <ul className='flex'>
                <li className='px-4'>Home</li>
                <li className='px-4'>About</li>
                <li className='px-4'>Support</li>
                <li className='px-4'>Platform</li>
                <li className='px-4'>Pricing</li>
            </ul>
            </div>
            <div className='flex'>
                <button className='px-2'>Sign in</button>
                <button className='px-2 bg-indigo-600 text-white py-3 w-32 rounded-md'>Sign up</button>
            </div>
           
            </div>
            <div>
   
            </div>
    
            <div className='md:hidden flex items-center justify-between' onClick={handleNav}>
            <h1 className='text-2xl md:text-3xl font-bold'>F8_Cloud.</h1>
              {nav ? <AiOutlineClose size={25}/> : <FaBars size={25}/>}
              <div className={nav ? 'w-full flex flex-col left-0 absolute top-0 mt-16 py-8 bg-gray-200' : 'hidden'}>
            <ul className='flex flex-col'>
                <li className='py-3 px-4 text-lg'>Home</li>
                <li className='py-3 px-4 text-lg'>About</li>
                <li className='py-3 px-4 text-lg'>Support</li>
                <li className='py-3 px-4 text-lg'>Platform</li>
                <li className='py-3 px-4 text-lg'>Pricing</li>
            </ul>
            <div className='w-full flex flex-col'>
            <button className='px-2'>Sign in</button>
                <button className='px-4 mx-4 bg-indigo-600 text-white py-4 rounded-md'>Sign up</button>
            </div>
              
            </div>
            </div>

    </nav>
  )
}

export default Navbar
