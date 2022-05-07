import React, { useContext, useState } from "react";
import "./ProfileMain.css"
import TweetBox from "./TweetBox"
import TweetPerso from "./TweetPerso"
import Tabs from "./Tabs";
import InfoPerso from "./InfoPerso"
import axios from "axios";
import { UserContext } from "./UserContext";
import Friendss from "./Friendss";

function ProfileMain(props) {

    const {user,setUser} = useContext(UserContext)
    const [nbM, setNbM] = useState("");
    const getNbMessage = () => {
        axios.get("http://localhost:4000/getUserNombrebMessage/" + user)
        .then(res => {
            setNbM(res.data.nbM)
            return res.data.nbM
        })
    }
    const nbbb = getNbMessage()

    if(!user) {
        return(
            <div> Vous n'etes pas connécté</div>
        )
    }
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
                    <TweetPerso log={user}/>
                </div>
                
                <div label="Amies">
                    <Friendss login={user} />
                </div>
            </Tabs>


        </div>
    )
}

export default ProfileMain