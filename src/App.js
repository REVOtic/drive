import React from 'react';
import './App.css';
import { selectUser } from './features/userSlice';
import Login from './Login';
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Photos from "./components/Photos";
import Docs from "./components/Docs";
import Audios from "./components/Audios";
import Videos from "./components/Videos";
import Navbar from "./components/Navbar";
import Upload from "./components/Upload";
import Homepage from './components/Homepage';
import Profile from './components/Profile';

function App() {

  const user = useSelector(selectUser);

  console.log(user);
  return (
    <div className="app">
      <Router>


        {!user ? (
          <Login />
        ) : (
          <>
            <Navbar />
            <Switch>
              <Route exact path="/photos">
                <Photos />
              </Route>
              <Route exact path="/docs">
                <Docs />
              </Route>
              <Route exact path="/audios">
                <Audios />
              </Route>
              <Route exact path="/videos">
                <Videos />
              </Route>
              <Route exact path="/upload">
                <Upload />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
              <Route path="/">
                <Homepage />
              </Route>
            </Switch>
          </>
        )}
      </Router>
    </div>
  )
}

export default App;
