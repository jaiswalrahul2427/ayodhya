import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faGem } from '@fortawesome/free-solid-svg-icons'
import Get_ready from "../../assets/Get_ready.jpeg"
import co_founder from "../../assets/Co-founder.jpeg"
import founder from "../../assets/Founder.jpeg"
import co_founder_2 from "../../assets/co_founder_2.jpeg"
function AboutPage() {
  return (
    <div>
    <div className=' px-6 pt-6 sm:pt-6 grid items-center md:h-[850px] md:grid-cols-2 md:px-16'>
        <div className='relative' data-aos="fade-left" >
        <img className=' rounded-3xl h-[600px] md:w-10/12  w-full' src={Get_ready} alt="" />
        <div className='absolute top-5 '>

        </div>
        </div>
      <div className='pt-10 ' data-aos="fade-right">
        <h1 className="pb-2 text-3xl font-bold text-orange-600 font-ubuntu">About Us</h1>
        <h2 className='text-2xl font-ubuntu '>We Will Helping You Find Your Dream Vacation</h2>
        <p className='py-5 text-xl '>Ayodhya Darshanam is one of the best name when it comes to Ayodhya Tour Packages. Ayodhya Darshanam knows the client’s needs, feeling and devotion towards Ayodhya and provide the most extensive selection of customizable Ayodhya Darshan packages, don’t wait book Ayodhya tour package today! Select your tour package as per the days you want to spend as we provide a wide range of sight scene, adventure, thrill, happiness and most important satisfaction and devotion towars Ayodhya.</p>
        <div className='space-y-5 '>
            <div className='flex '>
                <FontAwesomeIcon className="p-3 mt-2 text-3xl text-white bg-orange-600 rounded hover:bg-blue-950" icon={faEye} />
                <div className='pl-3 '><h3 className='text-xl font-bold text-blue-950 font-poppins'>Our Vision</h3>
                <p className='p-1 '>Ayodhya Darshanam is here to see themselves to be the most trusted and want to maintain the ancient customs and tradition among youngsters.</p>
                </div>
                
            </div>
            <div className='flex '>
                <FontAwesomeIcon className="p-3 mt-2 text-3xl text-white bg-orange-600 rounded hover:bg-blue-950" icon={faGem} />
                <div className='pl-3 '>
                    <h3 className='text-xl font-bold text-blue-950 font-poppins'>Our Mission</h3>
                    <p className='p-1 '>Ayodhya Darshanam is here to provide you a best tour and travel across all over Ayodhya with full gratitude and full support according to your freedom with honor and pride</p>
                </div>
                </div>
        </div>
      </div>
     
    </div>
    <div className='grid items-center justify-center grid-cols-1 px-6 py-5 mx-auto space-x-2 space-y-2 md:px-16 md:grid-cols-3 md:flex' style={{ backgroundImage: 'radial-gradient(at center center, #f79301 25%, #f2295b 75%)' }}  >
<div data-aos="zoom-in"> <img className=' md:w-[300px] h-[500px] sm:h-[600px] w-full md:h-[300px] rounded-xl bg-cover' src={founder} alt="pic" />
<h2 className='px-1 text-3xl font-bold text-center text-white font-poppins'>Founder</h2>
<p className='text-xl text-center text-white font-ubuntu'>Suraj Kumar</p>
<p className='text-center text-slate-200 font-ubuntu'>+91 9569237877</p>
</div>
<div data-aos="zoom-in"> <img className=' md:w-[300px] h-[500px] sm:h-[600px] w-full md:h-[300px] rounded-xl bg-cover' src={co_founder} alt="pic" />
<h2 className='px-1 text-3xl font-bold text-center text-white font-poppins'>Co-Founder</h2>
<p className='text-xl text-center text-white font-ubuntu'>Amitesh Partap Singh</p>
<p className='text-center text-slate-200 font-ubuntu'>+91 76519 87958</p>
</div>
<div data-aos="zoom-in"> <img className=' md:w-[300px] h-[500px] sm:h-[600px] w-full md:h-[300px] rounded-xl bg-cover' src={co_founder_2} alt="pic" />
<h2 className='px-1 text-3xl font-bold text-center text-white font-poppins'>Co-Founder</h2>
<p className='text-xl text-center text-white font-ubuntu'>Abhishek Pandey</p>
<p className='text-center text-slate-200 font-ubuntu'>+91 96959 19338</p>
</div>
    </div>
    <hr />
    </div>

  )
}

export default AboutPage
