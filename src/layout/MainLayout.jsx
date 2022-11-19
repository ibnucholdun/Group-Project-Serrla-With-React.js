import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

export default function MainLayout(){
    return (
        <>
            <Navbar nav1={'About'} route1={'/about'} nav2={'Contact Us'} route2={'/contact'} nav3={'Sign In'} route3={'/sign-in'} nav4={'Sign Up'} route4={'/sign-up'} route5={'/'}/>
            <Outlet/>
            <Footer/>
        </>
    )
}