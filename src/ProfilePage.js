import React from "react";
import "./Page.css";
import MainHome from './MainHome'
import Menu from './Menu';
import ProfileMain from "./ProfileMain.js"

function ProfilePage() {
    return (
        <div className="app">
            <Menu />

            <ProfileMain />

        </div>

    )
}


export default ProfilePage