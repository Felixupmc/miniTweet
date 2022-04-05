import React, { Component } from 'react'
import './Page.css';
import './Menu'
import MainHome from './MainHome'
import Menu from './Menu';
import { Button  } from 'reactstrap';
import { useNavigate } from "react-router-dom";

function App() {
  

  return (
    <div className="app">
      <Menu activ="0"/>


      <MainHome />

    </div>
  );
}

export default App;
