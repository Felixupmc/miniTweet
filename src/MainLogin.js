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

  const routeChangeLogin = () =>{ 

    axios.put("http://localhost:4000/user/login",{ 
      login: login,
      password: mdp,
    })
      .then((res) => {
        const u = res.data[0]
        setUser(u.login)
        let path = "/"; 
        navigate(path);
      })
      .catch(() => {
        let path = "/Register"; 
        navigate(path);
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
          }
        }>
          Connexion
        </button>
        
    </div>
  )
}

export default MainLogin;
