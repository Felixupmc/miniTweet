import React from "react";
import "./LoginPage.css";
import Menu from "./Menu"
import MainLogin from "./MainLogin"

function LoginPage () {

    return (
        <div className="login">
            <Menu />

            <MainLogin />
        </div>
    )

    
}

export default LoginPage