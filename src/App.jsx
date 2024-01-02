//hooks
import { useState } from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Project';

//style
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
