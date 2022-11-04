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
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/reducer" component={Reducer} />
        </Routes>


    </div>
  );
}


export default App;

