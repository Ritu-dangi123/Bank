import { Outlet } from "react-router-dom"
import TopNav from "./Component/TopNav"

import Topnav2 from "./Component/Topnav2"
import Footer from "./Component/Footer"

const Layout = () =>{
    return(
        <>
     <Topnav2/>
        <TopNav />
        <main>
        <Outlet />

        </main>

     <Footer/>

        
        </>
    )
}

export default Layout