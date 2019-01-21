import React, { Component } from 'react';
import '../css/devices.css';
import '../css/fix-layout.css';

export default class IPhoneX extends Component {
	render(){
		return(
        <div id="iphone">
            <div className="device device-iphone-x animate">
              <div className="device-frame">
                
                <div className="device-content animate-bg" aria-labelledby="Drop an image here." ondrop="drop(event)" ondragover="allowDrop(event)">
                  
                  <iframe title="iphoneXWindow" className="dev-content animate-bg" height="650" 
  src="https://strawhatrobby.github.io/chatty/" scrolling="yes" style={{background:'#26282b'}} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
              <div className="device-stripe"></div>
              <div className="device-header"></div>
              <div className="device-sensors"></div>
              <div className="device-btns"></div>
              <div className="device-power"></div>
              <div className="device-home"></div>
    </div>

    

    <script src="http://zeptojs.com/zepto.min.js"></script>
        </div>

		  )
	}
}
