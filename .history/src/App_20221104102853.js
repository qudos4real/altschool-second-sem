import React from 'react';
import Counter from './Components/Counter';
import './App.css';
import Reducer from './Components/Reducer';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {

  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/reducer" element={<Reducer />} />
        </Routes>
    </div>
  );
}


export default App;

