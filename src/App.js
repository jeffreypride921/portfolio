import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';

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
