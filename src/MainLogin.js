import React, { useContext, useState } from 'react'
import './MainLogin.css';
import { useNavigate } from "react-router-dom";
import { UserContext } from './UserContext';
const axios = require('axios')

function MainLogin () {
  const {user,setUser} = useContext(UserContext)

  const [login,setLogin] = useState('');
  const [mdp,setMdp] = useState('');

  let navigate = useNavigate(); 
  const routeChangeLogin = async () =>{ 
      axios.post("http://localhost:8999/user/login", {
        login : login ,
        password : mdp
      })
        .then((resp) => {
          setUser(login)
          let path = "/"; 
          navigate(path);
          return resp
        })
        .catch((err) => {
          setUser(login)
          let path = "/"; 
          navigate(path);
          return err
        })
      
  }

  return (
    <div className="mainLogin">


        <h2 className='top'>UserName</h2>
        <input placeholder="Felix75"  type="text" onChange={(e) => {setLogin(e.target.value)}}></input>

        <h2>Password</h2>
        <input placeholder="123"  type="password" onChange={(e) => {setMdp(e.target.value)}}></input>

        
        <button className="btnLogin" onClick={async () => {
            routeChangeLogin();
            setUser(user);
          }
        }>
          Connexion
        </button>
        
    </div>
  )
}

export default MainLogin;
