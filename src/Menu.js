import React from "react";
import './Menu.css'
import SearchBar from "./SearchBar"
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
    const activated = props.activ

    const routeChangeLogin = () =>{ 
        let path = "/Login"; 
        navigate(path);
        activated = "0"
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
        activated = "1"
    }

    return(
        <div className="menu">
            <div className="searchBar">
                <SearchBar />
            </div>
            <btn onClick={routeChangeHome}>
                <MenuItem id="0" active={activated} text="Home" Icon={AiTwotoneHome} />
            </btn>
            <btn onClick={routeChangeProfile}>
                <MenuItem id="1" active={activated} text="Profile" Icon={AiOutlineUser} />
            </btn>
            
            <MenuItem id="2" active={activated} text="Notifications" Icon={AiTwotoneBell} />
            <MenuItem id="3" active={activated} text="Messages" Icon={AiTwotoneMail} />
            <MenuItem id="4" active={activated} text="Saved" Icon={AiFillSave} />
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