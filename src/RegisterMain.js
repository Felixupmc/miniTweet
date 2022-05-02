import React, { useState } from "react";
import "./Page.css";
import Menu from "./Menu"
import { useNavigate } from "react-router-dom";
const axios = require('axios')

function Register () {
    
    let navigate = useNavigate(); 
    const routeChangeLogin = () =>{ 
        axios.put("http://localhost:4000/user",{ 
            login : login,
            password : mdp, 
            lastname : nom, 
            firstname : prenom
        })
        let path = "/Login"; 
        navigate(path);
    }

    const [login,setLogin] = useState('');
    const [nom,setNom] = useState('');
    const [prenom,setPrenom] = useState('');
    const [mdp,setMdp] = useState('');


    return (
        <form className="mainLogin">

            <h2>Nom</h2>
            <input placeholder="Entrez votre nom"  type="text" value={nom} onChange={(e) => {setNom(e.target.value)}} ></input>

            <h2>Prenom</h2>
            <input placeholder="Entrez votre prénom"  type="text" value={prenom} onChange={(e) => {setPrenom(e.target.value)}} ></input>

            <h2>Login</h2>
            <input placeholder="Créez votre login"  type="text" value={login} onChange={(e) => {setLogin(e.target.value)}}></input>

            <h2>Mot de passe</h2>
            <input placeholder="Créez votre mot de passe"  type="password" value={mdp} onChange={(e) => {setMdp(e.target.value)}}></input>

            <button className="btnLogin" onClick={routeChangeLogin}>
                Inscription
            </button>
        
        </form>
    )

    
}

export default Register