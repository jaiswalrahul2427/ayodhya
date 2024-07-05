import React from 'react'
import day_1 from '../../../assets/Day-1.jpeg'
import day_2 from "../../../assets/Day-2.jpeg"
import day_3 from "../../../assets/Day-3.jpg"
import './style.css'
import { Link } from 'react-scroll'

function Package() {
  return (
    <div className='px-2 pt-8 pb-10 sm:px-16'>
      <h1 className="pb-2 text-3xl font-bold text-orange-600 font-ubuntu">OUR TOURS PACKAGE</h1>
      <h3 className="text-2xl font-bold text-blue-950 font-poppins">Popular Tours For You</h3> 
      <div className='flex flex-wrap justify-between pt-8 space-y-5'>
        <div className='flex flex-col items-center w-full text-center md:-mb-3 md:mt-5 containe md:w-1/3' data-aos="fade-left">
          <img className='md:w-[450px] w-full md:h-80 h-96 img_tag' src={day_1} alt="Day 1" />
          <h2>Day 1 Tour</h2>
          <p>
            Ram Ki Paidhi Tour, Ram Janam Bhumi Tour, Kanak Bhawan Tour, Hanuman Garhi Tour, Dhashrath Mahal Tour, Nageshwar Nath Tour, Laxman Kila Tour, Kaleram Mandir Tour, Chhoti Devkali Tour, Mani Parvat Tour, 
          </p>
          <span className='font-light font-poppins text-slate-800'>*For 2 Guest</span>
          <div className='space-x-4 text-lg'>
            <span className='text-orange-500 font-poppins'>INR 7500</span>
            <span className='text-orange-500 strikethrough'>9000</span>
          </div>
          <button className='explore'>EXPLORE</button>
          <br />
          <button className='book_tour'>BOOK TOUR</button>
        </div>

        <div className='container flex flex-col items-center w-full text-center md:w-1/3' data-aos="zoom-in">
          <img className='md:w-[450px] w-full md:h-80 h-96 img_tag' src={day_2} alt="Day 2" />
          <h2>Day 2 Tour</h2>
          <p>Including Day1 and Guptar Ghat Tour, Panchmukhi Mahadev Tour, Makhauda Dham Tour and Travels Packages</p>
          <span className='font-light font-poppins text-slate-800'>*For 2 Guest</span>
          <div className='space-x-4 text-lg'>
            <span className='text-orange-500 font-poppins'>INR 15500</span>
            <span className='text-orange-500 strikethrough'>19500</span>
          </div>
          <button className='explore'><Link>EXPLORE</Link></button>
          <br />
          <button className='book_tour'>BOOK TOUR</button>
        </div>

        <div className='container flex flex-col items-center w-full text-center md:w-1/3' data-aos="fade-right">
          <img className='md:w-[450px] w-full md:h-80 h-96 img_tag' src={day_3} alt="Day 3" />
          <h2>Day 3 Tour</h2>
          <p>Including Day1, Day 2 tour and Shringi Rishi Ashram Tour, Dashrath Samadhi Tour, Bharat Kund Tour, Suraj kund Tour and Travels Packages</p>
          <span className='font-light font-poppins text-slate-800'>*For 2 Guest</span>
          <div className='space-x-4 text-lg'>
            <span className='text-orange-500 font-poppins'>INR 22500</span>
            <span className='text-orange-500 strikethrough'>25000</span>
          </div>
          <button className='explore'>EXPLORE</button>
          <br />
          <button className='book_tour'>BOOK TOUR</button>
        </div>
      </div>  
    </div>
  )
}

export default Package
