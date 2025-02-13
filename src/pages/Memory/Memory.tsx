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
  const [value, setValue] = useState<string>('');
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    const valueFromMemory = getValueFromMemory();
    setValue(valueFromMemory);
    setIsClicked(true);
  }
 

  return (

    <div className="container">

      <h1>Your memory</h1>
      <p>memory goes here</p>
      {/* <button onClick={getValueFromMemory}>Click me please...</button> */}
      <button onClick={handleClick}>Click me please...</button>
      {isClicked && (
        <div>
          <h4>memory: </h4>
          <p>{value}</p>
          </div>
      )}
    </div>
    
  );
  

};
export default Memory;
