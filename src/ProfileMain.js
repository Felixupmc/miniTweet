import React from "react";
import "./ProfileMain.css"
import TweetBox from "./TweetBox"
import Tweet from "./Tweet"
import Tabs from "./Tabs";
import {Avatar} from "@material-ui/core";

function ProfileMain() {
    return (
        <div className="ProfileMain">
            <div className="sticky">
                <TweetBox />
            </div>
            {/* Header */}
        
            <Tabs>
                <div label="Informations Personnelles">
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
                        <h4>Followers : </h4>
                        <h5>3</h5>
                    </div>
                    <div className="info">
                        <h4>Messages : </h4>
                        <h5>25</h5>
                    </div>
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
                    See ya later, <em>Alligator</em>!
                </div>
            </Tabs>


        </div>
    )
}

export default ProfileMain