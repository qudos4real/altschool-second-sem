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

    <ErrorBoundary >
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="counter" activeClassName="active">
              Counter
            </NavLink>
          </li>
          <li>
            <NavLink to="reducer" activeClassName="active">
              Reducer
            </NavLink>
          </li>
        </ul>

        {/* <NavLink to="/" className={(isActive) => isActive? "Active": "NotActive"}>Home</NavLink>
        <NavLink to="/counter" className={(isActive) => isActive? "Active": "NotActive"}>Counter</NavLink>
        <NavLink to="/reducer" className={(isActive) => isActive? "Active": "NotActive"}>Reducer</NavLink> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/reducer" element={<Reducer />} />
        <Route path="ErrorBoundary" element={<ErrorBoundary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </ErrorBoundary>
  )
}

export default App
