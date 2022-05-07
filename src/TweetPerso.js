import React from "react";
import "./Tweet.css";
import {Avatar} from "@material-ui/core";
import {AiFillSave,AiFillLike,AiFillDislike} from 'react-icons/ai'
import Friend from "./Friend.js"
import UnTweet from "./UnTweet";

const axios = require('axios')


class TweetPerso extends React.Component {
    /* props : userName, text, avatar, image */

    state = {
        messages: []
    }

    componentDidMount() {
        axios.get("http://localhost:4000/messagesFrom/"+this.props.log)
        .then(res => {
            const messages = res.data;
            this.setState({ messages });
            console.log(res.data)
        })
    }


    render() {
        return (
            this.state.messages.map((message,index) =>
                <UnTweet login={message.login} avatar={message.avatar} texte={message.texte} imgUrl={message.imgUrl} likes={message.likes} dislikes={message.dislikes}></UnTweet>
            )
        )
    }
    
}
export default TweetPerso


