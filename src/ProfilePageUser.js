import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Page.css";
import Menu from './Menu';
import ProfileMainUnUser from "./ProfileMainUnUser.js"
import axios from "axios";

function ProfilePageUser() {
    const user_login = useParams().user_login
    let [user,setUser] = useState({ }) 
    useEffect(async function(){
        const u = await axios.get("http://localhost:4000/user/"+user_login)
        setUser(u.data) 
       //Le resultat de la requete axios, on recharge la page avec le login//
                              //On retourne le resultat //
        
        
    }, user)
   
    return (
        <div className="app">
            <Menu activ="1"/>
            
            <ProfileMainUnUser />
            <p> 

                {(user.login)}
                Connected
            </p>

        </div>

    )
}


export default ProfilePageUser