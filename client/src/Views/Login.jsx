import React from "react";
import Navbar from "../Components/Navbar";
import Form from "../Components/Form"

const Login = () => {
    return ( 

        <div className="container-login">
        <header>
            <Navbar />
        </header>
        <main>
            <Form />
        </main>        
        </div>
     );
}
 
export default Login;