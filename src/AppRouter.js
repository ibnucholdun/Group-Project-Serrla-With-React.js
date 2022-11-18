import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/01-Landing Page/LandingPage.jsx'
import SignUp from './Pages/02-Sign Up/SignUp.jsx'
import SignIn from './Pages/03-Sign In/SignIn.jsx'
import Home from './Pages/04-Home Page/Home.jsx'
import Modul from './Pages/05-Modul Page/Modul.jsx'
import DetailModul from './Pages/06-Detail Modul Page/DetailModul.jsx'
import About from './Pages/07-About Page/About.jsx'
import ContactUs from './Pages/08-Contact Us Page/ContactUs.jsx'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/home">
            <Route path="" element={<Home />} />
            <Route path="detail-modul/:id" element={<DetailModul />} />
        </Route>
        <Route path="/modul" element={<Modul />} />
        {/* <Route path="/detail-modul/:id" element={<DetailModul />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
    </Routes>
  )
}

export default AppRouter