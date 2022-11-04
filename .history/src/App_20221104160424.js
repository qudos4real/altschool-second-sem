import React from 'react';
import Counter from './Components/Counter';
import './App.css';
import Reducer from './Components/Reducer';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import ErrorBoundary from './Components/ErrorBoundary';
import "../CSS/Counter.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



function App() {
  return (
    <>
    <Home />
    <Counter /> 
    <Reducer />
    <NotFound />
    <ErrorBoundary />

    </>

    // <Router>
    //   <ErrorBoundary >
    //   <nav>
        // <Link to="/" className='link'>Home</Link>
    //     <Link to="counter" className='link'>Counter</Link>
    //     <Link to="reducer" className='link'>Reducer</Link>
    //     <Link to="ErrorBoundary" className='link'>ErrorBoundary</Link>
    //     </nav>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/counter" element={<Counter />} />
    //     <Route path="/reducer" element={<Reducer />} />
    //     <Route path="ErrorBoundary" element={<ErrorBoundary />} />
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    //   </ErrorBoundary>
    // </Router>
  )
}

export default App
