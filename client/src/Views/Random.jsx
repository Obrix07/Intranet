import React from "react";
import NavbarRandom from "../Components/NavbarRandom";
import '../css/Random.css';
import CardRandom from "../Components/CardRandom";
import APIService from "../services/APIService";
import { useEffect, useState } from "react";

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
                <NavbarRandom />
            </header>
            <main className="main-random">
                {randomCollaborator && <CardRandom collaborator={randomCollaborator}/>}
            </main>
        </div>
        </>
     );
}
 
export default Random;