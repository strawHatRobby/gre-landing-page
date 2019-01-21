import React, { Component } from 'react';
import IPhoneX from './components/IPhoneX';
import Footer from './components/Footer';
import logo from './logo.svg';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="Container" style={{display: "flex",flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <IPhoneX/>
        
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
