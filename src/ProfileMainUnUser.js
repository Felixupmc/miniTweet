import React from "react";
import "./ProfileMain.css"
import TweetBox from "./TweetBox"
import Tweet from "./Tweet"
import Tabs from "./Tabs";
import InfoPerso from "./InfoPerso"
import Friend from "./Friend.js"

function ProfileMainUnUser() {
    return (
        <div className="ProfileMain">
        
            <Tabs className="sticky">
                <div label="Informations Personnelles">
                    <InfoPerso />
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

export default ProfileMainUnUser