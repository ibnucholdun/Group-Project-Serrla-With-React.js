import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

export default function AppLayout(){
    return (
        <>
            <Navbar nav1={'Home'} route1={'/home'} nav2={'Modul'} route2={'/modul'} nav4={'Logout'} route4={'/'}/>
            <Outlet/>
            <Footer/>
        </>
    )
}