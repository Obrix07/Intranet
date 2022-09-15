import React from "react";
import '../css/Listing.css'
import NavbarListing from "../Components/NavbarListing"
import Card from "../Components/Card";

const Listing = () => {
    return ( 

    <div className="container-listing">
    <header>
        <NavbarListing />
    </header>
    <main className="main-listing">
        <Card />
    </main>
    </div>

     );
}
 
export default Listing;