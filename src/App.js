import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Project from "./components/Project";

function App() {
  return (
    <React.Fragment>
    < Home />
    <Routes>
      <Route path="/experience" element={<Experience />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Project />} />
    </Routes>
    </React.Fragment>
  );
}

export default App;
