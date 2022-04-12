import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.js'
import LoginPage from './LoginPage.js';
import RegisterPage from "./RegisterPage.js"
import ErrorPage from "./ErrorPage.js"
import ProfilePage from "./ProfilePage.js"


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Profile" element={<ProfilePage />} />


        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
