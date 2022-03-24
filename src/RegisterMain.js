import React from "react";
import "./RegisterPage.css";
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
            <input placeholder="Ex: toto"  type="text" ></input>

            <h2>Prenom</h2>
            <input placeholder="Ex: toto"  type="text" ></input>

            <h2>UserName</h2>
            <input placeholder="Ex: toto"  type="text" ></input>

            <h2>Mot de passe</h2>
            <input placeholder="Ex: 123.."  type="password" ></input>

            <button className="btn" onClick={routeChangeLogin}>
                Register
            </button>
        
        </div>
    )

    
}

export default Register