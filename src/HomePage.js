import React, { Component } from 'react'
import './HomePage.css';
import './Menu'
import MainHome from './MainHome'
import Menu from './Menu';
import { Button  } from 'reactstrap';
import { useNavigate } from "react-router-dom";

function App() {
  

  return (
    <div className="app">
      <Menu />


      <MainHome />

    </div>
  );
}

export default App;
