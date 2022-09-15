import React from "react";
import { useState } from "react";

/*async function CardData(data) {
    let res = await fetch("/api/collaborateurs", {
        method : "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })

    if(res.status == 200) {
        let data = await response.json();
        console.log(data)
    }
}*/

const Card = () => {

    /*const [info,setInfo]=useState([]);
    const [url,setUrl]=useState("http://localhost:7000//api/collaborateurs");

    /*const cardInfo=async()=>{
        const res = await axios.get(url);
        getInfo(res.data.result);
    }

    const getInfo = async(res)=> {
        res.map(async(item)=> {
            const result = await axios.get(item.url)
            setInfo(state=> {
                state=[...state,result.data]
                return state;
            })
        })
    }

    const cardInfo=async()=> {

    }*/

    fetch("http://localhost:7000//api/collaborateurs")
    .then(res => res.json())
    .then(function (json) {
        console.log(json);
    });

    return ( 
        <>
        <div className="card-listing">
            <img src={"https://randomuser.me/api/portraits/men/40.jpg"} alt="" />
                <div className="card-content-listing">
                    <h4>Nom Prénom</h4>
                    <p>age</p>
                    <p>Ville, pays</p>
                    <p>email</p>
                    <p>Tel</p>
                    <p>Anniversaire</p>
            </div>
        </div>
        <div className="card-listing">
            <img src={"https://randomuser.me/api/portraits/men/40.jpg"} alt="" />
                <div className="card-content-listing">
                    <h4>Nom Prénom</h4>
                    <p>age</p>
                    <p>Ville, pays</p>
                    <p>email</p>
                    <p>Tel</p>
                    <p>Anniversaire</p>
            </div>
        </div>
        <div className="card-listing">
            <img src={"https://randomuser.me/api/portraits/men/40.jpg"} alt="" />
                <div className="card-content-listing">
                    <h4>Nom Prénom</h4>
                    <p>age</p>
                    <p>Ville, pays</p>
                    <p>email</p>
                    <p>Tel</p>
                    <p>Anniversaire</p>
            </div>
        </div>
        <div className="card-listing">
            <img src={"https://randomuser.me/api/portraits/men/40.jpg"} alt="" />
                <div className="card-content-listing">
                    <h4>Nom Prénom</h4>
                    <p>age</p>
                    <p>Ville, pays</p>
                    <p>email</p>
                    <p>Tel</p>
                    <p>Anniversaire</p>
            </div>
        </div>
        <div className="card-listing">
            <img src={"https://randomuser.me/api/portraits/men/40.jpg"} alt="" />
                <div className="card-content-listing">
                    <h4>Nom Prénom</h4>
                    <p>age</p>
                    <p>Ville, pays</p>
                    <p>email</p>
                    <p>Tel</p>
                    <p>Anniversaire</p>
            </div>
        </div>
            
        </>
     );
}
 
export default Card;