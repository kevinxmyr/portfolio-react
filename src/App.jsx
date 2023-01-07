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
import ScrollToTopAlways from "./Components/ScrollToTopAlways";
import Stacks from './Components/Stacks'
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="font-mont">
      <Router>
      {/* <ScrollToTopAlways /> */}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/aboutme'>
            <AboutMe />
            <Stacks />
            <Projects />
          </Route>
        </Switch>
        {/* <Redirect to='/' /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
