// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/another-route" element={<AnotherComponent />} /> Uncomment when ready */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

