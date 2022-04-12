import React from "react";
import "./MainHome.css"
import TweetBox from "./TweetBox"
import Tweet from "./Tweet"
import SearchBar from "./SearchBar"
import axios from 'axios';

function MainHome() {
    return (
        <div className="Main">
            {/* Header */}
           
            
            {/* TweatBox */}
            <div className="sticky">
                <TweetBox />
            </div>

            <Tweet />
            


        </div>
    )
}

export default MainHome