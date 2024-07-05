import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className='px-2 sm:px-20 md:px-32' style={{ backgroundImage: 'radial-gradient(at center center, #f79301 25%, #f2295b 75%)' }}>
      <div className='flex flex-wrap justify-between py-10 space-y-5 sm:text-center'>
        <div className='flex items-center justify-center w-full mx-auto md:w-auto md:m-0'>
          <img className='w-40 h-40' src={logo} alt="Ayodhya Darshanam Logo" />
        </div>
        <div className='w-full text-center sm:text-left md:w-2/5'>
          <h2 className='pb-4 text-2xl font-bold text-center text-white sm:text-left font-poppins'>About Ayodhya Darshanam</h2>
          <p className='text-xl text-white font-roboto'>
            Ayodhya Darshanam is one of the best names when it comes to Ayodhya Tour Packages. Ayodhya Darshanam knows the client’s needs, feelings, and devotion towards Ayodhya and provides the most extensive selection of customizable Ayodhya Darshan packages.
          </p>
        </div>
        <div className='w-full text-center sm:text-left md:w-auto'>
          <h2 className='pb-4 text-2xl font-bold text-white font-poppins'>Other Pages</h2>
          <ul className='space-y-2 text-white '>
            <li>
              <Link className='cursor-pointer hover:text-slate-700' to="/">Home</Link>
            </li>
            <li>
              <Link className='cursor-pointer hover:text-slate-700' to="/about">About Us</Link>
            </li>
            <li>
              <Link className='cursor-pointer hover:text-slate-700' to="/destination">Destination</Link>
            </li>
            <li>
              <Link className='cursor-pointer hover:text-slate-700' to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className='text-sm text-white'>Copyright@ 2024.Rahul</p>
      <hr className='w-full border-white' />
      <div className='flex flex-wrap justify-between pt-10 pb-5'>
        <div>
          <h2 className='text-2xl font-bold text-white font-poppins'>Enquire Now</h2>
          <p>
            <FontAwesomeIcon icon={faPhone} className='mr-2' />
            <span className='text-white'>+919569237877</span>
          </p>
        </div>
        <div>
          <h2 className='text-2xl font-bold text-white font-poppins'>Email Us</h2>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
            <span className='text-white'>xyz@.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
