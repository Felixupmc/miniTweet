import React from "react";
import "./Tweet.css";
import {Avatar} from "@material-ui/core";
import {AiFillSave,AiFillLike,AiFillDislike} from 'react-icons/ai'
import Friend from "./Friend.js"

const axios = require('axios')


class Tweet extends React.Component {
    /* props : userName, text, avatar, image */

    state = {
        messages: []
    }

    componentDidMount() {
        axios.get("http://localhost:4000/messages")
        .then(res => {
            const messages = res.data;
            this.setState({ messages });
            console.log(res.data)
        })
    }

    render() {
        return (
            this.state.messages.map(message =>
                <div className="Tweet">
                    <div className="header">
                        <Friend login={message.login} avatar="https://static.actu.fr/uploads/2021/10/portrait-jean-lassalle-gl-actu-toulouse-2.jpg"/>
                    </div>
                    <div className="text">
                        {message.texte}
                    </div>
                    <div className="image">
                        <img src={message.imgUrl} />
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
        )
    }
    
}
export default Tweet