import React from 'react'
import { Link } from 'react-scroll'
function Exploring() {
  return (
    <div className='px-2 pt-8 pb-10 text-center sm:px-20 '>
      <h1 className="pb-2 text-3xl font-bold text-orange-600 font-ubuntu">Exploring Ayodhya Tour and Travels Packages with Ayodhya Darshanam</h1>
      <div className='flex flex-wrap justify-between pt-5 space-y-5 '>
        <div className='w-full md:w-2/5' data-aos="fade-left">
            <h3 className="text-2xl font-bold text-blue-950 font-poppins">Understanding Your Needs of Ayodhya trip package.</h3>
        <p className='pt-3'>At Ayodhya Darshanam, we understand the profound spiritual connection people have with Ayodhya Packages. We know that visiting this sacred city is not just a tour, it’s a journey of the heart and soul. With this understanding, we strive to cater to the unique needs, feelings, and devotion of every traveler with Ayodhya trip Package.</p>
        </div>
        <div className='w-full md:w-2/5' data-aos="fade-right">
            <h3 className="text-2xl font-bold text-blue-950 font-poppins">A Wide Range of Customizable Ayodhya Packages</h3>
            <p className='pt-3 '>One size doesn’t fit all when it comes to Ayodhya tours and Travels. That’s why Ayodhya Darshanam offers an extensive selection of customizable Ayodhya Darshan packages. Whether you seek a short pilgrimage or an extended cultural exploration, we have the right package for you. <span className='text-pink-800 '><Link>Our packages</Link></span>  are designed to cater to your individual preferences, ensuring you get the most out of your Ayodhya experience.</p>
        </div>
      </div>
      <h1 className="pt-5 pb-1 text-3xl font-bold text-orange-600 font-ubuntu" data-aos="zoom-in">Booking Your Ayodhya Tour Package</h1>
      <p className='pt-3 md:px-20 font-roboto' data-aos="zoom-in">Booking your Ayodhya tour package with Ayodhya Darshanam is a breeze. Simply select the package that aligns with the number of days you want to spend in Ayodhya. Our packages encompass a wide range of experiences, from sightseeing to adventure, thrill, and, most importantly, spiritual satisfaction and devotion towards Ayodhya.</p>
    </div>
  )
}

export default Exploring
