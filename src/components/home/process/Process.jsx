import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faEye, faWarehouse } from '@fortawesome/free-solid-svg-icons'
import { faCcAmazonPay } from '@fortawesome/free-brands-svg-icons'

function Process() {
  return (
    <div className='px-2 pt-10 pb-5 sm:px-4 md:px-16'>
      <h1 className="pb-2 text-3xl font-bold text-center text-orange-600 font-ubuntu">Our Process</h1>
      <h3 className="pb-10 text-2xl font-bold text-center text-blue-950">We Complete Every Step Carefully</h3>
      
      <div className='grid grid-cols-2 gap-8 text-center md:grid-cols-4' data-aos="fade-up">
        <div className='relative flex flex-col items-center w-full'>
          <FontAwesomeIcon className='p-3 text-6xl text-white bg-[#f79301] hover:text-orange-700 rounded-xl' icon={faWarehouse} />
          <span className='absolute text-2xl font-bold bg-[#021e40] text-white py-0 px-2 rounded-full -top-4 left-1/2 transform -translate-x-1/2'>1</span>
          <h4 className='mt-8 text-2xl font-semibold text-blue-950 font-roboto'>Book A Tour</h4>
          <p className='text-slate-700'>You can instantly book your package according to your choice and facilities which you want.</p>
        </div>
        <div className='relative flex flex-col items-center w-full'>
          <FontAwesomeIcon className='p-3 text-6xl text-white bg-[#f79301] hover:text-orange-700 rounded-xl' icon={faCcAmazonPay} />
          <span className='absolute text-2xl font-bold bg-[#021e40] text-white py-0 px-2 rounded-full -top-4 left-1/2 transform -translate-x-1/2'>2</span>
          <h4 className='mt-8 text-2xl font-semibold text-blue-950 font-roboto'>Payment Process</h4>
          <p className='text-slate-700'>You can pay for your package using various payment methods, including Amazon Pay.</p>
        </div>
        <div className='relative flex flex-col items-center w-full'>
          <FontAwesomeIcon className='p-3 text-6xl text-white bg-[#f79301] hover:text-orange-700 rounded-xl' icon={faCircleCheck} />
          <span className='absolute text-2xl font-bold bg-[#021e40] text-white py-0 px-2 rounded-full -top-4 left-1/2 transform -translate-x-1/2'>3</span>
          <h4 className='mt-8 text-2xl font-semibold text-blue-950 font-roboto'>Confirmation</h4>
          <p className='text-slate-700'>Once your payment is successful and booking is confirmed, you will be notified via E-Mail and SMS.</p>
        </div>
        <div className='relative flex flex-col items-center w-full'>
          <FontAwesomeIcon className='p-3 text-6xl text-white bg-[#f79301] hover:text-orange-700 rounded-xl' icon={faEye} />
          <span className='absolute text-2xl font-bold bg-[#021e40] text-white py-0 px-2 rounded-full -top-4 left-1/2 transform -translate-x-1/2'>4</span>
          <h4 className='mt-8 text-2xl font-semibold text-blue-950 font-roboto'>Enjoy the Tour</h4>
          <p className='text-slate-700'>Wishing you a safe journey and a relaxing holiday when you arrive.</p>
        </div>
      </div>
    </div>
  )
}

export default Process
