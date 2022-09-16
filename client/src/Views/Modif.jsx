import React from "react";
import InputModif from "../Components/InputModif";
import NavbarRandom from "../Components/NavbarRandom";


const UserModif = () => {
    return ( 
        <>
        <div className="container-random">
            <header>
                <NavbarRandom />
            </header>
            <main className="main-random">
                <InputModif />
            </main>
        </div>
        </>
     );
}
 
export default UserModif;