import React from "react";
import "./Tweet.css";
import {Avatar} from "@material-ui/core";
import {AiFillSave,AiFillLike,AiFillDislike} from 'react-icons/ai'
import Friend from "./Friend.js"
import { useNavigate } from "react-router";

const axios = require('axios')


function UnTweet (props) {
    /* props : userName, text, avatar, image */

    let navigate = useNavigate(); 

    const routeChangeUserPage = () =>{ 
        let path = "/Profile/"+props.login; 
        navigate(path);
    }

    const liker = () =>{
        axios.put("http://localhost:4000/messages/liker",{ 
            login : props.login,
            texte : props.texte,
        })
    }


    const del = () =>{
        axios.delete("http://localhost:4000/messages/"+(props.login)+"/"+(props.texte), {})
    }
    
    return (
            <div className="Tweet">
                <div className="header">
                    <button onClick={routeChangeUserPage}>
                        <Friend login={props.login} avatar={props.avatar}/>

                    </button>
						<input 
                        className="delete-button"
                        type='button'
                        value='X'
                        onClick={() => {
                            del()
                        }}/>
                </div>
                <div className="text">
                    {props.texte}
                </div>
                <div className="image">
                    <img src={props.imgUrl} />
                </div>
                <div className="footer">
                    <button className="btn1" onClick={liker}>
                        <AiFillLike color="#1DA1F2" fontSize="2rem" />
                    </button>
                    <div>
                        {props.likes}
                    </div>
                    <button className="btn1">
                        <AiFillDislike color="#1DA1F2" fontSize="2rem" />
                    </button>
                    <div>
                        {props.dislikes}
                    </div>
                    <button className="btn1" >
                        <AiFillSave color="#1DA1F2" fontSize="2rem" />
                    </button>
                </div>
            </div>
        )
    
}
export default UnTweet


