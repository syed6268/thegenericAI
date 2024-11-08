import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import TaskSetup from './pages/TaskSetup';
import Documentation from './pages/Documentation';
import Pricing from './pages/Pricing';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task-setup" element={<TaskSetup />} />
        <Route path="/docs" element={<Documentation />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
