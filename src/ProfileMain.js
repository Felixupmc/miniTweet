import React, { useContext, useState } from "react";
import "./ProfileMain.css"
import TweetBox from "./TweetBox"
import Tweet from "./Tweet"
import Tabs from "./Tabs";
import InfoPerso from "./InfoPerso"
import Friend from "./Friend.js"
import axios from "axios";
import { UserContext } from "./UserContext";

function ProfileMain(props) {

    const {user,setUser} = useContext(UserContext)
    const [nbM, setNbM] = useState("");
    const getNbMessage = () => {
        axios.get("http://localhost:4000/getUserNombrebMessage/" + user)
        .then(res => {
            setNbM(res.data)
            return res.data
        })
    }
    //const nbbb = getNbMessage()
////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div className="ProfileMain">
            <div className="sticky">
                <TweetBox />
            </div>
            {/* Header */}
        
            <Tabs className="sticky">
                <div label="Informations Personnelles">
                    <InfoPerso login={props.login} avatar={props.avatar} nbMe={nbM}/>
                </div>

                <div label="Messages">
                    <Tweet />
                    
                    {/* postList */}
                    {/* postList */}
                    {/* postList */}
                    {/* postList */}
                    {/* postList */}
                    {/* postList */}
                    {/* postList */}
                </div>
                
                <div label="Amies">
                    <Friend login="kenzz" avatar="https://static.actu.fr/uploads/2021/10/portrait-jean-lassalle-gl-actu-toulouse-2.jpg"/>
                    <Friend login="felzz" avatar="https://static.actu.fr/uploads/2021/10/portrait-jean-lassalle-gl-actu-toulouse-2.jpg"/>
                </div>
            </Tabs>


        </div>
    )
}

export default ProfileMain