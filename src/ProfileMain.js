import React from "react";
import "./ProfileMain.css"
import TweetBox from "./TweetBox"
import Tweet from "./Tweet"
import Tabs from "./Tabs";
import InfoPerso from "./InfoPerso"
import Friend from "./Friend.js"

function ProfileMain() {
    return (
        <div className="ProfileMain">
            <div className="sticky">
                <TweetBox />
            </div>
            {/* Header */}
        
            <Tabs className="sticky">
                <div label="Informations Personnelles">
                    <InfoPerso />
                </div>

                <div label="Messages">
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
                </div>
                
                <div label="Amies">
                    <Friend />
                    <Friend />
                </div>
            </Tabs>


        </div>
    )
}

export default ProfileMain