import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  render() {
  return (
    <Router>
      <div>
      <h2>hello</h2>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/services' component={Services} />
        <Route exact path='/about' component={About} /> 
      </Switch>
      </div>
    </Router>
  );
}
}

export default App;
