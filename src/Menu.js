import React, { useContext } from "react";
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
import { UserContext } from "./UserContext";

function Menu( props ){

    const {user,setUser} = useContext(UserContext)

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

    const deconnexion = () =>{
        setUser(null)
        let path = "/"; 
        navigate(path);
        activated = "0"
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
                {user ? (
                    <button className="btn" onClick={deconnexion}>Déconnexion</button>
                ) : (
                    <button className="btn" onClick={routeChangeLogin}>
                        Sign In
                    </button>
                )}
                <button className="btn" onClick={routeChangeRegister}>
                    Register
                </button>
            </div>
            <div>
                {user}
            </div>

        </div>
    );


}

export default Menu;