import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';

import './App.css';


function App() {
  return (
    <Router>
      <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/services' component={Services} />
        <Route exact path='/about' component={About} /> 
      </Switch>
      </div>
    </Router>
  );
}

export default App;
