import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import ResList from './components/ResList';
import Home from './components/Home';
import ResCreate from './components/ResCreate';
import ResDetails from './components/ResDetails';
import ResSearch from './components/ResSearch';
import ResUpdate from './components/ResUpdate';
import Nav from './components/Nav';
import Notfound from './components/Notfound';

function App() {

  return (
  <div>
    <Router>
      <Nav/>

    <Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/list"  component={ResList}/>
  <Route path="/create" component={ResCreate}/>
  <Route path="/search" component={ResSearch}/>
  <Route path="/details" component={ResDetails}/>
  <Route path="/update/:id" component={ResUpdate}/>
  <Route component={Notfound}/>
  </Switch>
</Router>
    </div>
  )
}

export default App;
