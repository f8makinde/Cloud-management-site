import React from 'react'
import bgImg from '../assets/support.jpg'
import Cards from './Cards'
import { FaPhoneAlt } from 'react-icons/fa';
import {BiChip} from 'react-icons/bi'
import {MdSupport} from 'react-icons/md'
const Support = () => {
  return (
    <div>
        <div className='bg-slate-900/90 h-[700px]'>
            <img className='h-[700px] w-full object-cover mix-blend-overlay bg-black absolute' src={bgImg} alt='support-pics' />
            <div className='max-w-[1240px] mx-auto text-center relative  top-20 text-white flex flex-col gap-6 px-6'>
            <h1 className='uppercase text-3xl'>support</h1>
            <h3 className='text-5xl font-bold'>Finding the right team</h3>
            <p className='text-3xl text-left'>Trusted for over 25 years, we are a leader in Managed IT Services. Our track record has been built upon being a bit different: from the human touch and flexibility in approach, to our agility and outstanding quality of service.</p>
            </div>
            <div className='max-w-[1240px] mx-auto pt-16 pb-32'>
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-8 px-4 pt-12 sm:pt-20 text-black'>
                
               
                <div className='pt-24 pb-6 bg-white rounded-xl shadow-2xl'>
              
                <Cards icon={<FaPhoneAlt size={30} />} title='Sales' btn='Contact Us' text='A sale is a transaction between two or more parties in which the buyer receives tangible or intangible goods, services, or assets in exchange for money. In some cases, other assets are paid to a seller'/>
                </div>
               
                
             <div className='pt-24 pb-6 bg-white rounded-xl shadow-2xl'>
             <Cards icon={<BiChip size={30}/>}title='Technical Support' btn='Contact Us' text='With the increasing use of technology in modern times, there is a growing requirement to provide technical support. Many organizations locate their technical support departments.'/>
             </div>
        
             <div className='pt-24 pb-6 bg-white rounded-xl shadow-2xl'>
             <Cards icon={<MdSupport size={30}/>} title='Media Inquiries' btn='Contact Us' text='Press inquiries also occur when developers wish to use a new release or feature article sent to them, and require further information on a company or its products.'/>
             </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Support
