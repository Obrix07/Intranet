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
                <Link to="/random" className="underline">Dire bonjour !</Link>
                <Link to="/listing" className="underline">Listing</Link>
                <button onClick={LogOut} className="button-listing">Se déconnecter</button>
            </div>
        </div>
        </>
     );
}
 
export default NavbarListing;
