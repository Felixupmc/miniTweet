import React,{ useState } from "react";
import "./TweetBox.css";
import {Avatar} from "@material-ui/core";
const axios = require('axios')

function TweetBox() {

    const routeChangeLogin = () =>{ 
        axios.put("http://localhost:4000/messages",{ 
            login : login,
            texte : texte
        })
    }

    const [login,setLogin] = useState('test');
    const [texte,setTexte] = useState('');

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://static.actu.fr/uploads/2021/10/portrait-jean-lassalle-gl-actu-toulouse-2.jpg" />
                    <input placeholder="Que voulez-vous partager ?"  type="text" value={texte} onChange={(e) => {setTexte(e.target.value)}}/>
                </div>
                <button className="tweetButton" onClick={routeChangeLogin}>Poster</button>
            </form>
        </div>

    )
}


export default TweetBox