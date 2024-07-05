import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhone, faEnvelopesBulk } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm';

function ContactUs() {
  return (
    <div className='px-4 py-12 -ml-5 md:px-16'>
      <h1 className="pb-2 text-3xl font-bold text-center text-orange-600 font-ubuntu" data-aos="zoom-in">Contact Us</h1>
      <h2 className="text-2xl font-bold text-center text-blue-950 font-poppins" data-aos="zoom-in">Get In Touch With Ayodhya Darshnam</h2>
      <p className='px-1 pt-4 pb-16 text-center text-slate-800 ' data-aos="zoom-in">
         Ayodhya Darshanam is one of the best names when it comes to Ayodhya Tour Packages. Ayodhya Darshanam knows the client’s needs, feelings and devotion towards Ayodhya and provides the most extensive selection of customizable Ayodhya Darshan packages. Don’t wait, book your Ayodhya tour package today! Select your tour package as per the days you want to spend as we provide a wide range of sightseeing, adventure, thrill, happiness, and most importantly, satisfaction and devotion towards Ayodhya.
      </p>
      <div className='flex flex-wrap justify-center gap-8 px-4 py-12 md:px-16'>
        <div className='w-full md:w-[300px] grid content-center justify-center px-10 py-16 text-center bg-orange-600 border-2 border-blue-700 rounded' data-aos="zoom-out-left">
          <FontAwesomeIcon className='mx-auto text-6xl' icon={faLocationArrow} />
          <h3 className='mt-4 text-2xl font-bold font-ubuntu'>Our Location</h3>
          <p>Ayodhya, Uttar Pradesh,<br /> India</p>
        </div>
        <div className='w-full md:w-[300px] grid content-center justify-center px-10 py-16 text-center bg-orange-600 border-2 border-blue-700 rounded' data-aos="zoom-in">
          <FontAwesomeIcon className='mx-auto text-6xl' icon={faPhone} />
          <h3 className='mt-4 text-2xl font-bold font-ubuntu'>Phone Number</h3>
          <p>123456789</p>
        </div>
        <div className='w-full md:w-[300px] grid content-center justify-center px-10 py-16 text-center bg-orange-600 border-2 border-blue-700 rounded' data-aos="zoom-out-right">
          <FontAwesomeIcon className='mx-auto text-6xl' icon={faEnvelopesBulk} />
          <h3 className='mt-4 text-2xl font-bold font-ubuntu'>Email Us</h3>
          <p>xyz@gmail.com</p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}

export default ContactUs;
