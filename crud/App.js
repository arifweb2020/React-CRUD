import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ResList from './components/ResList';
import Home from './components/Home';
import ResCreate from './components/ResCreate';
import ResDetails from './components/ResDetails';
import ResSearch from './components/ResSearch';
import ResUpdate from './components/ResUpdate';
import Nav from './components/Nav';

function App() {

  return (
  <div>
    <Router>
      <Nav/>


  <Route exact path="/" component={Home}></Route>
  <Route path="/list"  component={ResList}></Route>
  <Route path="/create" component={ResCreate}></Route>
  <Route path="/search" component={ResSearch}></Route>
  <Route path="/details" component={ResDetails}></Route>
  <Route path="/update/:id" component={ResUpdate}></Route>
</Router>
    </div>
  )
}

export default App;
