import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import ScrollToTopAlways from "./Components/ScrollToTopAlways";
import Stacks from './Components/Stacks'

function App() {
  return (
    <div className="font-mont">
      <Router>
      <ScrollToTopAlways />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/aboutme'>
            <AboutMe />
            <Stacks />
          </Route>
        </Switch>
        <Redirect to='/' />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
