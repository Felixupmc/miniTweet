import React, { useContext, useState } from "react";
import "./ProfileMain.css"
import TweetBox from "./TweetBox"
import Tweet from "./Tweet"
import Tabs from "./Tabs";
import InfoPerso from "./InfoPerso"
import Friend from "./Friend.js"
import { UserContext } from "./UserContext";
import axios from "axios";

function ProfileMainUnUser(props) {

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


    return (
        <div className="ProfileMain">


                <div className="DIVERS">
                    <InfoPerso login={props.login} avatar={props.avatar} nbMe={nbM} />
                </div>

                <input 
                className="delete-button"
                type='button'
                value='Ajouter en ami'
                />


                <input 
                className="delete-button"
                type='button'
                value='Supprimer'
                />


                <div label="Messages">
                    <Tweet user={props.user} />

                    {/* postList */}
                    {/* postList */}
                    {/* postList */}
                    {/* postList */}
                    {/* postList */}
                    {/* postList */}
                    {/* postList */}
                </div>



        </div>
    )
}

export default ProfileMainUnUser
