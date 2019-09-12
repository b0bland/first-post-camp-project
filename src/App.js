import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'


import './App.css';



class App extends React.Component {

  render() {
  return (
    <Router>
      <div>
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
