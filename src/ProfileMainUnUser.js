import React, { useContext, useState } from "react";
import "./ProfileMain.css"
import TweetBox from "./TweetBox"
import Tweet from "./Tweet"
import Tabs from "./Tabs";
import InfoPerso from "./InfoPerso"
import Friend from "./Friend.js"
import { UserContext } from "./UserContext";
import axios from "axios";
import TweetPerso from "./TweetPerso"
import { useParams } from "react-router";


function ProfileMainUnUser(props) {

    const user_login = useParams().user_login


    const {user,setUser} = useContext(UserContext)
    const [nbM, setNbM] = useState("");
    const getNbMessage = () => {
        axios.get("http://localhost:4000/getUserNombrebMessage/" + props.login)
        .then(res => {
            setNbM(res.data.nbM)
            return res.data.nbM
        })
    }
    const nbbb = getNbMessage()

//////////////////////////////////////////////////////////////////:

    const addF = () =>{ 
        axios.put("http://localhost:4000/friend",{ 
            user_login1: user,
            user_login2: props.login
        })
    }



    if(user){
        if(user_login==user){
            return (
                <div className="ProfileMain">
        
        
                        <div className="bor">
                            <InfoPerso login={props.login} avatar={props.avatar} nbMe={nbM} />
                        </div>
        
        
        
                        <div label="Messages">
                            <TweetPerso log={user_login}/>
                        </div>
        
        
        
                </div>
            )
        }
    }
    
    return (
        <div className="ProfileMain">


                <div className="bor">
                    <InfoPerso login={props.login} avatar={props.avatar} nbMe={nbM} />
                    <input 
                    className="delete-button"
                    type='button'
                    value='Ajouter en ami'
                    onClick={addF}
                    />


                    <input 
                    className="delete-button"
                    type='button'
                    value='Supprimer'
                    />
                </div>



                <div label="Messages">
                    <TweetPerso log={user_login}/>
                </div>



        </div>
    )
    
}

export default ProfileMainUnUser
