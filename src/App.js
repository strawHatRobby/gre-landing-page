import React, { Component } from 'react';
import IPhoneX from './components/IPhoneX';
import Footer from './components/Footer';
import logo from './logo.svg';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="Container">
        <h1 style={{color:'#fff'}}>Angrezi.life</h1>
        <IPhoneX/>

        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
