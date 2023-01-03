import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import AboutMe from "./Components/AboutMe";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="font-mont">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/aboutme'>
            <AboutMe />
          </Route>
        </Switch>
        <Redirect to='/' />
      </Router>
    </div>
  );
}

export default App;
