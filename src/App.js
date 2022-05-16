import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import LoginComponent from './components/LoginComponent';

class App extends Component {
  render() {
    return (
      <div>
       
       {
            (localStorage.getItem("currentUser") === undefined || localStorage.getItem("currentUser") === null)
            ?
            <LoginComponent />
            :
            <Home />
          }
    
      </div>
    );
  }}
export default App;