import React from "react";
import '../css/Listing.css'
import NavbarListing from "../Components/NavbarListing"
import Card from "../Components/Card";
import { useState, useEffect } from "react";
import APIService from "../services/APIservice";

const Listing = () => {

    const [collaborators, setCollaborators] = useState([]);

  const getAllCollaborator = async () => {
    const data = await APIService.getAllCollaborators();
    
    setCollaborators(data);
  };

  useEffect(() => {
    getAllCollaborator();
  }, []);

    return ( 

    <div className="container-listing">
    <header>
        <NavbarListing />
    </header>
    <main className="main-listing">
        {collaborators.map(collaborator => <Card collaborator={collaborator} key={collaborator.id}/>)}
    </main>
    </div>

     );
}
 
export default Listing;