import React, { Component } from 'react';
import '../css/devices.css'

export default class Footer extends Component {
	render(){
		return(
            <footer>


    <div className="container" style={{display:'flex', justifyContent: 'space-between', flexDirection:'row'}}>

      
      <div className="row">

        
        <div className="col-md-12 py-5">
          <div className="mb-5 flex-center">

            
            {/* <a className="fb-ic">
              <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            
            <a class="tw-ic">
              <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            
            <a class="gplus-ic">
              <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            
            <a class="li-ic">
              <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            
            <a class="ins-ic">
              <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            
            <a class="pin-ic">
              <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
            </a> */}
          </div>
        </div>
        

      </div>
      

    </div>
    

    
    <div className="footer-copyright text-center py-3">© 2019 Copyright:
      <a href="https://strawHatRobby.github.io/gre-landing-page"> angerzi.life</a>
    </div>
    

            </footer>
		  )
	}
}