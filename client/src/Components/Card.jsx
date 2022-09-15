import React from "react";

const Card = ({collaborator}) => {

    console.log(collaborator)

    return ( 
        <>
        <div className="card-listing">
            <img src={collaborator.photo} alt="" />
                <div className="card-content-listing">
                    <h4>{collaborator.firstname} {collaborator.lastname}</h4>
                    <p>age</p>
                    <p>{collaborator.city}, {collaborator.country}</p>
                    <p>{collaborator.email}</p>
                    <p>{collaborator.phone}</p>
                    <p>{collaborator.birthdate}</p>
            </div>
        </div>
        </>
     );
}
 
export default Card;