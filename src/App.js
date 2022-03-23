import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.js'
import Login from './Login.js';
import Register from "./Register.js"
import ErrorPage from "./ErrorPage.js"

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />


        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
