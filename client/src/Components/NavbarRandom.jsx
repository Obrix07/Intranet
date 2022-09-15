import React from "react";
import Logo from "../images/logo2.png";
import { Link } from 'react-router-dom'


function LogOut() {
    localStorage.clear();
    window.location="/";
}

const NavbarRandom = () => {
    return ( 
        <>
        <div className="header-random">
            <img src={Logo} alt="" />
            <div className="navbar-right-random">
                <img src={Logo} alt=""/>
                <Link to="/listing" className="underline">Listing</Link>
                <button onClick={LogOut} className="button-listing">Se déconnecter</button>
            </div>
        </div>
        </>
     );
}
 
export default NavbarRandom;