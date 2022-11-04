import React from 'react';
import Counter from './Components/Counter';
import './App.css';
import Reducer from './Components/Reducer';
import Home from './Components/Home';
import Error from './Components/Error';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="counter">Counter</Link>
        <Link to="reducer">Reducer</Link>
        Route component={Error}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/reducer" element={<Reducer />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
