import React from "react";

const InputModif = () => {
    return ( 
        <>
            <form action="">
                <div>
                    <label htmlFor="">Civilité</label>
                    <select name="" id="">
                        <option value="homme">Homme</option>
                        <option value="homme">Femme</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Catégorie</label>
                    <select name="" id="">
                        <option value="homme">Client</option>
                        <option value="homme">Femme</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Nom</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">User</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" />
                </div>
            </form>
        </>
     );
}
 
export default InputModif;