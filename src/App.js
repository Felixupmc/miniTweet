import React, { useState , useMemo} from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.js'
import LoginPage from './LoginPage.js';
import RegisterPage from "./RegisterPage.js"
import ErrorPage from "./ErrorPage.js"
import ProfilePage from "./ProfilePage.js"
import ProfilePageUser from "./ProfilePageUser.js"

import { UserContext } from './UserContext';

function App() {
  
  const [user,setUser] = useState(null);

  const providerUser = useMemo(() => ({user,setUser}), [user,setUser]);
  return (
    <UserContext.Provider value={providerUser}>

    <Router>  
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/Profile/:user_login" element={<ProfilePageUser />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
    </UserContext.Provider>

  );
}

export default App;
