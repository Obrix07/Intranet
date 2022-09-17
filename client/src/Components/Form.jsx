import React from "react";
import Logo from "../images/logo2.png";
import { useState } from "react"

async function LoginUser(connexion) {
    let response = await fetch("http://localhost:7000/api/login", {
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(connexion)
    });

    if(response.status == 200) {
        let data = await response.json();
        console.log(data.token)
        localStorage.setItem("token", data.token)
    }
    };

const Form = () => {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const submit = async e => {
        e.preventDefault();
        const data = await LoginUser({
            "email": username,
            "password": password
        });
        window.location = "/random";
    }

    return ( 
        <>
            <form onSubmit={submit} className="form-login">
                <div className="form-head-login">
                    <img src={Logo} alt=""/>
                    <p>Bienvenue sur le réseau social de votre entreprise !</p>
                </div>
                <div className="list-input-login">
                    <input className="input-login" type="email" onChange={e => setUserName(e.target.value)} id="email" placeholder="E-mail"/>
                    <input className="input-login" type="password" onChange={e => setPassword(e.target.value)} id="password" placeholder="Mot de passe"/>
                    <button className="button-login" type="submit">Se connecter</button>
                </div>
            </form>
        </>
     );
}
 
export default Form;