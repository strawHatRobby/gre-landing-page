import React, { Component } from 'react';
import IPhoneX from './components/IPhoneX';
import Footer from './components/Footer';
import logo from './logo.svg';
import './css/App.css';
import { Button, Grid, Row, Col, PageHeader } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="Container">
      <Grid>
        <Row className="show-grid">
        <Col xs={12} md={8} >
        <header style={{flex:1,textAlign:'center', justifyContent:'center'}}>
        <h1 style={{ paddingLeft: "20%", color:'#fff', fontSize: '3em', height:'70px', width:'200px', fontFamily:'YellowTail'}}>Angrezi.life</h1>
        </header>
        <Row className="show-grid">
        <Col>
          <h2 style={{color:'#fff', fontSize: '3em',  fontFamily:'Nunito Sans'}}>Changing the way you learn</h2 >
          <p style={{paddingLeft: '1.5%',color: '#E3E3E3', fontFamily:'Open Sans'}}><i>Introducing a cool new way to build vocabulary, master punctuations, speed up 
comprehension and much more…</i></p>
        <br/>
        <h3 style={{color:'#E3E3E3', fontSize: '1.5em',  fontFamily:'Open Sans'}}><b>The GRE app you always wished for!</b></h3 >
        <div class="SignUp" style={{paddingTop:"5%", paddingBottom:"13%"}}>
        <form>
          <input type="email" placeholder="Register for an early access"  style={{padding: '1%',  paddingLeft: '4%', width: "70%", borderRadius: '90px', boxShadow: '0 0 100px #EC05FF'}}></input>
          <button type="submit" style={{left:"71.75%", padding: '1%', border: 'none', position: 'absolute',  paddingBottom: '2.1%', paddingLeft: '4%',paddingRight: '4%', backgroundColor: "#EC05FF", color:"#fff", borderRadius: '100px', boxShadow: '0 0 10px #a5a5a5'}}>Submit</button>
        </form>
        </div>


        
        </Col>
        <Row>
          <Col>
          <div id="storeDownload">
        <img  style={{height:"30%", width:"30%"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1024px-Download_on_the_App_Store_Badge.svg.png"></img>
        <img style={{height:"35%", width:"35%"}} src="http://www.aps.edu/students-parents/images/downloadOnTheGooglePlayStoreBadge.png/image_preview"></img>
        </div>

          </Col>
        </Row>
        </Row>
        </Col>
        <Col xs={6} md={4} >
        <IPhoneX/>
        </Col>
        </Row>
        
      </Grid>
      
        

</div>
        <Footer/>
      </div>
    );
  }
}

export default App;
