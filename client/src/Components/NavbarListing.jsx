import React from "react";
import Logo from "../images/logo2.png";
import { Link } from "react-router-dom"

function LogOut() {
    localStorage.clear();
    window.location="/";
}

const NavbarListing = () => {
    return ( 
        <>
        <div className="header-listing">
            <img src={Logo} alt="" />
            <div className="navbar-right-listing">
                <img src={Logo} alt=""/>
                <button onClick={LogOut} className="button-listing">Se déconnecter</button>
            </div>
        </div>
        </>
     );
}
 
export default NavbarListing;
