import './App.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

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
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/signup">
            <Signup setIsAuthenticated={setIsAuthenticated} />
          </Route>
          <Route path="/signin">
            <Signin setIsAuthenticated={setIsAuthenticated} />
          </Route>
          <Route path="/home">
            <Home 
            // setIsAuthenticated={setIsAuthenticated}
             />
          </Route>
          <Route path="/">
            {isAuthenticated ? <Redirect to="/home" /> : <Redirect to="/signin" />}
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
