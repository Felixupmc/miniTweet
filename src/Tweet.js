import React from "react";
import "./Tweet.css";
import {Avatar} from "@material-ui/core";
import {AiFillSave,AiFillLike,AiFillDislike} from 'react-icons/ai'


{/* props : userName, text, avatar, image */}
function Tweet (props) {

    return (
        <div className="Tweet">
            <div className="header">
                <div className="avatar">
                    <Avatar src="https://static.actu.fr/uploads/2021/10/portrait-jean-lassalle-gl-actu-toulouse-2.jpg" />
                </div>
                <div className="titre">
                    <h3>Félix </h3>
                </div>
            </div>
            <div className="text">
                Premier tweet sur le miniTweet pour enfin tester a peut pret
            </div>
            <div className="image">
                <img src="https://static.actu.fr/uploads/2021/10/portrait-jean-lassalle-gl-actu-toulouse-2.jpg" />
            </div>
            <div className="footer">
                <button className="btn1">
                    <AiFillLike color="#1DA1F2" fontSize="2rem" />
                </button>
                <button className="btn1">
                    <AiFillDislike color="#1DA1F2" fontSize="2rem" />
                </button>
                <button className="btn1">
                    <AiFillSave color="#1DA1F2" fontSize="2rem" />
                </button>
            </div>
        </div>
    )
}

export default Tweet