import React, { Component } from 'react'
import './App.css';
import './Menu'
import Main from './Main'
import Menu from './Menu';
import { Button  } from 'reactstrap';
import { useNavigate } from "react-router-dom";

function App() {
  

  return (
    <div className="app">
      <Menu />


      <Main />

    </div>
  );
}

export default App;
