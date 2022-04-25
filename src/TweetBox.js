import React,{ useState } from "react";
import "./TweetBox.css";
import {Avatar} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const axios = require('axios')

function TweetBox() {
    let navigate = useNavigate(); 

    async function clique() {
        const res = await poster()
        .then(() => refreshPage())//////////////////////////
    }
    
    function poster() { 
        return new Promise((resolve, reject) => {
            axios.put("http://localhost:4000/messages",{ 
                login : login,
                texte : texte,
                imgUrl : imgUrl,
            })
            resolve()
        });
        
    }


    function refreshPage() {
        window.location.reload(false);
    }

    const [login,setLogin] = useState('totoPourLinstant');
    const [texte,setTexte] = useState('');
    const [imgUrl,setimgUrl] = useState('');

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://static.actu.fr/uploads/2021/10/portrait-jean-lassalle-gl-actu-toulouse-2.jpg" />
                    <input placeholder="Que voulez-vous partager ?"  type="text" value={texte} onChange={(e) => {setTexte(e.target.value)}}/>
                </div>
                <div className="imgPLUSbtn">
                    <input placeholder="url d'une image"  type="email" value={imgUrl} onChange={(e) => {setimgUrl(e.target.value)}}/>
                    <button className="tweetButton1" onClick={clique} >Poster</button>
                </div>
            </form>
        </div>

    )
}


export default TweetBox