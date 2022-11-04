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
        <div>Hello</div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/reducer" component={Reducer} />
        </Switch>
      </Router>
    </>

  );
}

export default App;

