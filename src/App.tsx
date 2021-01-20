import React from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
    <div className="app">
  
    <Switch>
       
       <Route path='/login'>
            <Header/>
            <Footer/>
       </Route>
       <Route path='/signup'>
            <Header/>
            <Footer/>
       </Route>
       <Route path='/'>
            <Header/>
            <Footer/>
       </Route>
    </Switch>

   </div>

 </Router>
  );
}

export default App;
