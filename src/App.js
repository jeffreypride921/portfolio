import React from 'react';
import './App.css';
// import { Route, Routes} from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion'; 
//import motion from 'framer-motion';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Biography from './components/Biography/Biography';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Home/>
        <Biography/>
        <Skills/>
        <Projects/>
        <Contact/>
      </Router>
    </div>
  );
}

export default App;
