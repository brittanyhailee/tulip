import React, {useEffect, useState} from 'react';
import './Panel.css';
// import IndexedDb from './indexedDb';
import Test from './DB'; 

const Main = () => {
  return (
    <div>
      <h1>Welcome to the Main Page</h1>
      {/* Use the Test component here */}
      <Test />
    </div>
  );
};

const Panel: React.FC = () => {

  return (
    
    <div className="container">
      <Test />
      <h1>Your memory</h1>
      <form action="#" id="input">
        <label>What would you like to remember?</label>
        <textarea id="memory"></textarea>
        <input type="submit" value="send"></input>
      </form>

    </div>
    
  );
  

};
export default Panel;
