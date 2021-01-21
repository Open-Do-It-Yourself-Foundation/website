import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
     <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
      </Switch>
    </div>
  );
}

export default App;
