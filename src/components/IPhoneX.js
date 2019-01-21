import React, { Component } from 'react';
import '../css/devices.css';
import '../css/fix-layout.css';

export default class IPhoneX extends Component {
	render(){
		return(
        <div id="iphone">
        <h1>Instant iPhone X mockup.</h1>

    
    <div id="mup-container">
      <div id="iphone-x" className="container grid-xl text-center">
        <div className="columns">
          <div className="column col-12">
            <div className="device device-iphone-x animate">
              <div className="device-frame">
                
                <div className="device-content animate-bg" aria-labelledby="Drop an image here." ondrop="drop(event)" ondragover="allowDrop(event)">
                  
                  <iframe className="dev-content animate-bg" height="650" 
  src="https://strawhatrobby.github.io/chatty/" scrolling="yes" style={{background:'#26282b',paddingTop:'20px'}} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
              <div className="device-stripe"></div>
              <div className="device-header"></div>
              <div className="device-sensors"></div>
              <div className="device-btns"></div>
              <div className="device-power"></div>
              <div className="device-home"></div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <footer></footer>

    <script src="http://zeptojs.com/zepto.min.js"></script>
        </div>

		  )
	}
}
