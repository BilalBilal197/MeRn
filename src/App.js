import React from 'react';
import NavBar from './components/Navbar';
import "./App.css";
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/screens/Home';
import SignIn from './components/screens/SignIn';
import Profile from './components/screens/Profile';
import Signup from './components/screens/Signup';


function App(){
  <BrowserRouter>
    <NavBar />
    <Route exact path="/">
      <Home />

    </Route>
    <Route path = "/signin">
      <SignIn />
    </Route>
    <Route path = "/signup">
      <Signup />
    </Route>
    <Route path = "/profile">
      <Profile />
    </Route>
  </BrowserRouter>


};

export default App;