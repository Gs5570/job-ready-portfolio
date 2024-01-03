//hooks
import { useState } from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

//style
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
