import React from "react";
import './Menu.css'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiTwotoneHome} from 'react-icons/ai'
import {AiTwotoneBell} from 'react-icons/ai'
import {AiTwotoneMail} from 'react-icons/ai'
import {AiFillSave} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import MenuItem from "./MenuItem"

import { useNavigate } from "react-router-dom";

function Menu( props ){

    let navigate = useNavigate(); 
    const routeChangeLogin = () =>{ 
        let path = "/Login"; 
        navigate(path);
    }
    const routeChangeRegister = () =>{ 
        let path = "/Register"; 
        navigate(path);
    }
    const routeChangeHome = () =>{ 
        let path = "/"; 
        navigate(path);
    }
    const routeChangeProfile = () =>{ 
        let path = "/Profile"; 
        navigate(path);
    }

    return(
        <div className="menu">
            <div className="icon">
                <MenuItem Icon={AiOutlineTwitter} />
            </div>
            <btn onClick={routeChangeHome}>
                <MenuItem active text="Home" Icon={AiTwotoneHome} />
            </btn>
            <btn onClick={routeChangeProfile}>
                <MenuItem text="Profile" Icon={AiOutlineUser} />
            </btn>
            
            <MenuItem text="Notifications" Icon={AiTwotoneBell} />
            <MenuItem text="Messages" Icon={AiTwotoneMail} />
            <MenuItem text="Saved" Icon={AiFillSave} />
            <div className="btns">
                <button className="btn" onClick={routeChangeLogin}>
                    Sign In
                </button>
                <button className="btn" onClick={routeChangeRegister}>
                    Register
                </button>
            </div>

        </div>
    );


}

export default Menu;