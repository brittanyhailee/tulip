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
            <a href="panel.html"><div class="circle-1"></div></a>
            <h2>remember a memory:</h2>
            <a href="memory.html"><div class="circle-2"></div></a>

            {/* <button onclick="window.location.href=Memory.jsx" class="circle"></button> */}
          </div>
             

       </div>
      </body>

  );
};

export default Popup;
