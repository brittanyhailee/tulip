import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
import camera from '../../assets/img/camera.png';
import tulip from '../../assets/img/tulip.gif'
import tag from '../../assets/img/gift_tag.gif'



const Popup = () => {
  return (
      <body>
        <div id="app-container">
          <h1 id="title">tulip</h1>
          <div id="memory"> 
            <a href="panel.html"><img id="tulip-gif" src={tulip}></img></a>
            <a href="memory.html"><img id="tag-gif" src={tag}></img></a>

            {/* <button onclick="window.location.href=Memory.jsx" class="circle"></button> */}
          </div>
             

       </div>
      </body>

  );
};

export default Popup;
