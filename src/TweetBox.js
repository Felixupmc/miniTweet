import React,{ useContext, useState } from "react";
import "./TweetBox.css";
import {Avatar} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

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

    const getAvatar = () => {
        axios.post("http://localhost:4000/getUser",{ 
            login : user,
        })
        .then((res) => {
            return res.avatar
        })
    }


    const [login,setLogin] = useState(user);
    const [texte,setTexte] = useState('');
    const [imgUrl,setimgUrl] = useState('');

    return (
        <div>
            <form className="tweetBox">
                <div className="tweetBox__input">
                    <Avatar src={getAvatar} />
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