import React,{ useContext, useState } from "react";
import "./TweetBox.css";
import {Avatar} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { tsConstructorType } from "@babel/types";

const axios = require('axios')

function TweetBox() {

    let navigate = useNavigate(); 
    const {user,setUser} = useContext(UserContext)

    const setlog = async () =>{ 
        return new Promise(async (resolve, reject) => {
            await setLogin(user)
            resolve()
        });
        
    }

    const clique = async (e) => {
        e.preventDefault();
        setlog()
        .then(async () => {
            const tmp = await poster()
            faitLe()
        })
        
    }
    
    const faitLe = (alors) => {
        console.log(alors)
        let path = "/Login"; 
        navigate(path)
        let path1 = "/"
        navigate(path1)
    }
                
    
    const poster = async () =>{ 
        return new Promise((resolve, reject) => {
            axios.put("http://localhost:4000/messages/poster",{ 
                login : login,
                texte : texte,
                imgUrl : imgUrl,
            })
            resolve()
        });
        
    }

    const [login,setLogin] = useState(user);
    const [texte,setTexte] = useState('');
    const [imgUrl,setimgUrl] = useState('');

    

    const [avaa, setAvaa] = useState("");

    const getAvatar = () => {
        axios.get("http://localhost:4000/getUserAvatar/" + user)
        .then(res => {
            setAvaa(res.data)
            return res.data
        })
    }

    const ava = getAvatar()


    
    return (
        <div>
            <form className="tweetBox">
                <div className="tweetBox__input">
                    <Avatar src={avaa} />
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