import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
import camera from '../../assets/img/camera.png';

const Popup = () => {
  return (
      <body>
        <div id="app-container">
          <h1 id="title">tulip</h1>
          <div id="memory"> 
            <h2>share your memory:</h2> 
            {/* <div>
              <button class="capture">
                <img class="camera" src={camera}></img>
              </button>
            </div> */}
            <div class="circle"></div>
          </div>
             

       </div>
      </body>

  );
};

export default Popup;
