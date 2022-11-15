import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const About = () => {
  return (
    <div>
      <Navbar nav1={'About'} route1={'/about'} nav2={'Contact Us'} route2={'/contact'} nav3={'Sign In'} route3={'/sign-in'} nav4={'Sign Up'} route4={'/sign-up'}/>
      <Footer />
    </div>
  )
}

export default About