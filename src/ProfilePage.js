import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Page.css";
import Menu from './Menu';
import ProfileMain from "./ProfileMain.js"
import axios from "axios";

function ProfilePage(props) {
    let [user,setUser] = useState({ }) 
    useEffect(async function(){
        const u = await axios.get("http://localhost:4000/user/"+props.u)
        setUser(u.data) 
       //Le resultat de la requete axios, on recharge la page avec le login//
                              //On retourne le resultat //
        
        
    }, user)
   
    return (
        <div className="app">
            <Menu activ="1"/>
            
            <ProfileMain login={user.login} avatar={user.avatar}/>


        </div>

    )
}


export default ProfilePage