import React from "react";
import "./MainHome.css"
import TweetBox from "./TweetBox"
import Tweet from "./Tweet"
import SearchBar from "./SearchBar"

function MainHome() {
    return (
        <div className="Main">
            {/* Header */}
           
            
            {/* TweatBox */}
            <div className="sticky">
                <TweetBox />
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

export default MainHome