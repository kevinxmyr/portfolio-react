import React from "react";
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
import Stacks from "./Components/Stacks";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Framer from "./Components/Framer";

// import ContextComponent from "./Components/ContextComponent";

function App() {
  return (
    <div className='font-mont'>
      <Router>
        <ScrollToTopAlways />
        <Framer />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/aboutme'>
            
            {/* <ContextComponent /> */}

            <AboutMe />
            <Stacks />
            <Projects />
            <Contact />

          </Route>
          
        </Switch>
        {/*<Redirect exact to='/' />  REMOVED TO PREVENT REFRESH FROM REDIRECTIING TO HOME PAGE */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
