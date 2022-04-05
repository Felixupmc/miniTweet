import React from "react";
import "./Page.css";
import Menu from "./Menu"
import { useNavigate } from "react-router-dom";

function Register () {

    let navigate = useNavigate(); 
    const routeChangeLogin = () =>{ 
        let path = "/"; 
        navigate(path);
    }

    return (
        <div className="mainLogin">

            <h2>Nom</h2>
            <input placeholder="Entrez votre nom"  type="text" ></input>

            <h2>Prenom</h2>
            <input placeholder="Entrez votre prénom"  type="text" ></input>

            <h2>Login</h2>
            <input placeholder="Créez votre login"  type="text" ></input>

            <h2>Mot de passe</h2>
            <input placeholder="Créez votre mot de passe"  type="password" ></input>

            <button className="btnLogin" onClick={routeChangeLogin}>
                Inscription
            </button>
        
        </div>
    )

    
}

export default Register