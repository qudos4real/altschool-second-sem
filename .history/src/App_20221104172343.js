import React from 'react';
import Counter from './Components/Counter';
import './App.css';
import Reducer from './Components/Reducer';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import ErrorBoundary from './Components/ErrorBoundary';
import "./CSS/Counter.css";
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';





function App() {

  useEffect(() => {
    document.title = "React Counter";
    }, []);

  return (
    // <>
    // <Home />
    // <Counter /> 
    // <Reducer />
    // <NotFound />
    // <ErrorBoundary />
    // </>

    <Router>
      <nav>
        <NavLink to="/" className={}>Home</NavLink>
        <NavLink to="counter" className='link'>Counter</NavLink>
        <NavLink to="reducer" className='link'>Reducer</NavLink>
        <NavLink to="ErrorBoundary" className='link'>ErrorBoundary</NavLink>
        </nav>
      <ErrorBoundary >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/reducer" element={<Reducer />} />
        <Route path="ErrorBoundary" element={<ErrorBoundary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </ErrorBoundary>
    </Router>
  )
}

export default App
