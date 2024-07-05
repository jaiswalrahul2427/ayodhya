import React from 'react';
import best_travel_guide from '../../../assets/Best-tour-guide.png';
import location from '../../../assets/Location_logo.png';
import hotel from '../../../assets/hotel_logo.png';
import support from '../../../assets/support-24_7.png';
import price from '../../../assets/Competitive-Price.png';
import car from '../../../assets/car.png';

function ChooseUs() {
  return (
    <div className="px-4 pt-10 pb-5 md:px-16 " style={{ backgroundImage: 'radial-gradient(at center center, #f79301 25%, #f2295b 75%)' }}>
      <div className="">
        <h1 className="pb-2 text-3xl font-bold text-center text-blue-900 font-ubuntu">Why Choose Us</h1>
        <p className="text-2xl text-center text-white font-poppins">We are Professional Planners for Your Vacations</p>
        <div className="flex items-center justify-center pt-10">
          <iframe data-aos="zoom-in"
            className='rounded h-[500px] lg:w-[1300px]  w-[800px] md:h-[700px] md:w-[1000px]'
            src="https://www.youtube.com/embed/eQGtMLhKdxY"
            title="लाइव आरती हनुमान जी महाराज की हनुमान गढ़ी अयोध्या जी धाम"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="px-2 pt-16 mx-auto space-y-10 text-white sm:mx-0 sm:px-8">
        <div className="flex flex-wrap justify-between space-y-4 md:space-y-0">
          <div className="flex items-center w-full space-x-4 md:w-2/5" data-aos="fade-left">
            <img src={car} className="h-28" alt="Car" />
            <div>
              <h1 className="text-3xl font-poppins">Facility</h1>
              <p>Pickup & Drop From Airport, Railway Station, Bus Station</p>
            </div>
          </div>
          <div className="flex items-center w-full space-x-4 md:w-2/5" data-aos="fade-right" >
            <img src={location} className="h-28" alt="Location" />
            <div>
              <h1 className="text-3xl font-poppins">Beautiful destination</h1>
              <p>Though Ayodhya is beautiful, the locations we have in our packages are soothing, relaxing, and eye-catching.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between space-y-4 md:space-y-0">
          <div className="flex items-center w-full space-x-4 md:w-2/5" data-aos="fade-left">
            <img src={price} className="h-28" alt="Price" />
            <div>
              <h1 className="text-3xl font-poppins">Competitive Price</h1>
              <p>When compared to others, our services offer more facilities and authenticity.</p>
            </div>
          </div>
          <div className="flex items-center w-full space-x-4 md:w-2/5" data-aos="fade-right" >
            <img src={hotel} className="h-28" alt="Hotel" />
            <div>
              <h1 className="text-3xl font-poppins">Luxury Hotel</h1>
              <p>We offer luxurious hotels and rooms at affordable prices, ensuring you are re-energized for the next day's exploration.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between space-y-4 md:space-y-0">
          <div className="flex items-center w-full space-x-4 md:w-2/5" data-aos="fade-left">
            <img src={support} className="h-28" alt="Support" />
            <div>
              <h1 className="text-3xl font-poppins">Support 24/7</h1>
              <p>We provide the best telephonic and email support 24/7.</p>
            </div>
          </div>
          <div className="flex items-center w-full space-x-4 md:w-2/5" data-aos="fade-right" >
            <img src={best_travel_guide} className="h-28" alt="Travel Guide" />
            <div>
              <h1 className="text-3xl font-poppins">Best Travel Guide</h1>
              <p>We provide a fully planned trip when you get started with us.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
