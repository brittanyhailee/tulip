import React, {useEffect, useState} from 'react';
import './Memory.css';
import IndexedDb from '../../db/indexedDb';
import {getValueFromMemory} from '../../db/Request';


const Main = ({ memory, handleClick }: { memory: string; handleClick: () => void }) =>{
  return (
    <div className="container">

      <h1>A memory to live for</h1>
   

      <div id="memory-container">
        {/* <div id="memory-div"></div>  */}
   
        <textarea
          value={memory}
          readOnly
          className='memory-output'
         />
        {/* <div id="memory-div">{memory
            .split("\n")
            .map((line, index) => <p key={index}>{line}</p>)
            }
          </div> */}
          <button id="memory-btn" onClick={handleClick}>Remember a memory</button>
      </div>
      
    </div>
  );
};

const Memory: React.FC = () => {
  const [memory, setMemory] = useState<string>('');


  function fetchMemory(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getValueFromMemory());
      }, 2000); 

    });
  }

  const handleClick = () => {
    getValueFromMemory().then((memory) => {
      // memory = memory.replace(/\\n/g, "\n"); replace new line with spaces 
      memory = memory.replace(/\\n/g, "\n"); 
      // memory = memory.replace(/\n/g, '<br>');
      
      // document.getElementById('memory-div').innerHTML = memory;
    
      setMemory(memory);
    }).catch((error) => {
      console.log("Error fetching memory: ", error);
    });
    // getSize()
  
  };

  return <Main memory={memory} handleClick={handleClick} />; 
    
  
  

};
export default Memory;
