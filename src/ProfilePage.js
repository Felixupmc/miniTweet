import React from "react";
import "./ProfilePage.css";
import MainHome from './MainHome'
import Menu from './Menu';
import ProfileMain from "./ProfileMain.js"

function ProfilePage() {
    return (
        <div className="profilePage">
            <Menu />

            <ProfileMain />

        </div>

    )
}


export default ProfilePage