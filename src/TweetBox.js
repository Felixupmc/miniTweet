import React from "react";
import "./TweetBox.css";
import {Avatar} from "@material-ui/core";

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://static.actu.fr/uploads/2021/10/portrait-jean-lassalle-gl-actu-toulouse-2.jpg" />
                    <input placeholder="Que voulez-vous partager ?"  type="text" />
                </div>
                <button className="tweetButton">Poster</button>
            </form>
        </div>

    )
}


export default TweetBox