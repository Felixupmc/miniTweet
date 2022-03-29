import React from "react";
import "./ProfileMain.css"
import TweetBox from "./TweetBox"
import Tweet from "./Tweet"
import {Avatar} from "@material-ui/core";

function ProfileMain() {
    return (
        <div className="ProfileMain">
            <div className="sticky">
                <TweetBox />
            </div>
            {/* Header */}
            <div className="ProfileMain__header">

                <div className="info">
                    <div className="avatar">
                        <Avatar src="https://static.actu.fr/uploads/2021/10/portrait-jean-lassalle-gl-actu-toulouse-2.jpg" />
                    </div>
                    <h2>Jean LASSALE</h2>
                </div>
                <div className="info">
                    <h4>Age : </h4>
                    <h5>19</h5>
                </div>
                <div className="info">
                    <h4>Nombe d'amis : </h4>
                    <h5>3</h5>
                </div>
                <div className="info">
                    <h4>Nombre de twits : </h4>
                    <h5>25</h5>
                </div>
                
                
                
            </div>
        
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            {/* postList */}
            {/* postList */}
            {/* postList */}
            {/* postList */}
            {/* postList */}
            {/* postList */}
            {/* postList */}
            {/* postList */}


        </div>
    )
}

export default ProfileMain