import React from "react";
import "./Tweet.css";
import {Avatar} from "@material-ui/core";
import {AiFillSave,AiFillLike,AiFillDislike} from 'react-icons/ai'
import Friend from "./Friend.js"

const axios = require('axios')


class Friendss extends React.Component {
    /* props : userName, text, avatar, image */

    state = {
        messages: []
    }

    componentDidMount() {
        axios.get("http://localhost:4000/FriendsOf/"+this.props.login)
        .then(res => {
            const messages = res.data;
            this.setState({ messages });
            console.log(res.data)
        })
    }


    render() {
        return (
            this.state.messages.map((message,index) =>
                <Friend login={message.user_login2} avatar={message.avatar} ></Friend>
            )
        )
    }
    
}
export default Friendss


