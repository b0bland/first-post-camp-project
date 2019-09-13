import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Footer from './components/Footer'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faBuilding, faWrench, faCalculator } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faHome, faBuilding, faWrench, faCalculator)

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
      <Footer/>
      </div>
    </Router>
  );
}
}

export default App;
