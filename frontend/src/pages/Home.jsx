import React from 'react'
import Hero from './Hero'
import AboutDoctor from '../components/AboutDoctor'
import Services from '../components/Services'
import Appointment from '../components/Appointment'
// import Achievements from '../components/Achievements'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
        <Hero />
        <AboutDoctor />
        <Services />
        {/* <Achievements /> */}
        <Appointment />
        <Testimonials />
    </div>
  )
}

export default Home