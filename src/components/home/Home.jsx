import React from 'react'
import NavBar from "../navbar/NavBar"
import Sliders from "./slid/Sliders"
import Booking from './booking/Booking'
import Tgt from './txt/Tgt'
import Package from './package/Package'
import Exploring from './exploring/Exploring'
import ChooseUs from './chooseUs/ChooseUs'
import AyodhyaDarshanam from './ayodhyaDarshanam/AyodhyaDarshanam'
import Process from './process/Process'
import Testimonials from './testimonials/Testimonials'
import Footer from '../footer/Footer'
function Home() {
  return (
    <div className='pt-5  '>
      <Sliders/>
      <Booking/>
      <Tgt/>
      <Package/>
      <Exploring/>
      <ChooseUs/>
      <AyodhyaDarshanam/>
      <Process/>
      <Testimonials/>
    </div>
  )
}

export default Home
