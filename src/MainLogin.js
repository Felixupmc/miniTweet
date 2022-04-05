import React from 'react'
import './MainLogin.css';
import { useNavigate } from "react-router-dom";

function MainLogin () {

  let navigate = useNavigate(); 
    const routeChangeLogin = () =>{ 
        let path = "/"; 
        navigate(path);
    }

  return (
    <div className="mainLogin">


        <h2 className='top'>UserName</h2>
        <input placeholder="Felix75"  type="text" ></input>

        <h2>Password</h2>
        <input placeholder="123"  type="password" ></input>

        <button className="btn" onClick={routeChangeLogin}>
          Connexion
        </button>

        
    </div>
  )
}

export default MainLogin;
