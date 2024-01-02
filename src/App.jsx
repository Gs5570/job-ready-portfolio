//hooks
import { useState } from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';

//pages
import Home from './pages/Home';

//style
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Home />
    </div>
  );
}

export default App;
