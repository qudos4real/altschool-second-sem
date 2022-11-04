import React from 'react';
import Counter from './Components/Counter';
import './App.css';
import Reducer from './Components/Reducer';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




function App() {

  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/counter">Counter</a>
            </li>
            <li>
              <a href="/reducer">Reducer</a>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/reducer" component={Reducer} />
        </Switch>
      </Router>
    <Home />
    <Counter />
    <Reducer />
    </>

  );
}

export default App;
