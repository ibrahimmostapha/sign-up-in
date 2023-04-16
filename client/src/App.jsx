import './App.css'
import React, { useState } from 'react';
// import { BrowserRouter as Router,  Route, Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/signUp/Signup';
import Signin from './pages/signIn/Signin';
import Home from './pages/home/Home';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    // Clear the authentication session
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>

      <BrowserRouter>
        <Routes>

          {/* signUp  */}
          <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />

          {/* signIn  */}
          <Route path="/signin" element={<Signin setIsAuthenticated={setIsAuthenticated} />} />

          <Route path="*" element={<Navigate to="/signin" />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
