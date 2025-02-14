import React, {useEffect, useState} from 'react';
import './Memory.css';
import IndexedDb from '../../db/indexedDb';
import {getValueFromMemory} from '../../db/Request';



const Main = () => {
  return (
    <div>
      <h1>Welcome to the Main Page</h1>
      {/* Use the Test component here */}

    </div>
  );
};

const Memory: React.FC = () => {
  // const [value, setValue] = useState<string>('');
  // const [isClicked, setIsClicked] = useState<boolean>(false);
  const [memory, setMemory] = useState<string>('');
  
  // const handleClick = () => {
  //   const valueFromMemory = getValueFromMemory();
  //   setValue(valueFromMemory);
  //   setIsClicked(true);
  // }

  function fetchMemory(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getValueFromMemory());
      }, 2000); 

    });
  }

  const handleClick = () => {
    getValueFromMemory().then((memory) => {
      console.log("the memory is: ", memory);
      setMemory(memory);
    }).catch((error) => {
      console.log("Error fetching memory: ", error);
    });
  }


  return (

    <div className="container">

      <h1>Your memory</h1>
      <p>memory goes here</p>
      {/* <button onClick={getValueFromMemory}>Click me please...</button> */}
      <button id="memory-btn" onClick={handleClick}>Click me please...</button>
      <div>
        <h4>memory: </h4>
        <p>{memory}</p>
      </div>
      
    </div>
    
  );
  

};
export default Memory;
