import React from "react";

const Card = ({collaborator}) => {

    return ( 
        <>
        <div className="card-listing">
            <h3>{collaborator.service}</h3>
            <br />
            <img src={collaborator.photo} alt="" />
                <div className="card-content-listing">
                    <h4>{collaborator.firstname} {collaborator.lastname}</h4>
                    <p><b>Localisation</b> : {collaborator.city}, {collaborator.country}</p>
                    <p><b>E-mail</b> : {collaborator.email}</p>
                    <p><b>Tel</b> : {collaborator.phone}</p>
                    <p><b>Date de naissance</b> : {collaborator.birthdate}</p>
            </div>
        </div>
        </>
     );
}
 
export default Card;