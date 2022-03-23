import React from "react";
import './Menu.css'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiTwotoneHome} from 'react-icons/ai'
import {AiTwotoneBell} from 'react-icons/ai'
import {AiTwotoneMail} from 'react-icons/ai'
import {AiFillSave} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiFillStar} from 'react-icons/ai'
import MenuItem from "./MenuItem";


function Menu(){
    return(
        <div className="menu">
            <div className="icon">
                <MenuItem Icon={AiOutlineTwitter} />
            </div>
            <MenuItem active text="Home" Icon={AiTwotoneHome} />
            <MenuItem text="Notifications" Icon={AiTwotoneBell} />
            <MenuItem text="Messages" Icon={AiTwotoneMail} />
            <MenuItem text="Saved" Icon={AiFillSave} />
            <MenuItem text="Profile" Icon={AiOutlineUser} />
            <div className="btns">
                <button className="btn">
                    Sign In
                </button>
                <button className="btn">
                    Register
                </button>
            </div>

        </div>
    );


}

export default Menu;