import React from "react";
import APIService from "../services/APIService";
import { useEffect, useState } from "react";
import NavbarListing from "../Components/NavbarListing";
import Card from "../Components/Card";

const Random = () => {

    const [randomCollaborator, setRandomCollaborator] = useState(null);

  const getRandom = async () => {
    const data = await APIService.getRandomCollaborator();
    
    setRandomCollaborator(data);
  };

  useEffect(() => {
    getRandom();
  }, []);

    return ( 
        <>
        <div className="container-random">
            <header>
                <NavbarListing />
            </header>
            <main className="main-random">
                {randomCollaborator && <Card collaborator={randomCollaborator}/>}
                <div className="main-random-right-content">
                  <h3>Bienvenue sur votre Intranet !</h3>
                  <p>Aller dire bonjour à votre nouveau collaborateur, si son profil ne vous inspire pas, cliquez sur le <b>boutton ci-dessous</b> pour en voir un nouveau, ou sinon sur "listing" dans le menu pour afficher tout vos collaborateurs</p>
                  <button onClick={getRandom}>Bouton ci-dessous</button>
                </div>
            </main>
        </div>
        </>
     );
}
 
export default Random;