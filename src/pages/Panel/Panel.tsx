import React, {useEffect, useState} from 'react';
import './Panel.css';
// import IndexedDb from './indexedDb';
// import Test from './DB'; 
import IndexedDb from '../../db/indexedDb';


const  Main = ({handleClick, textareaRef}: {handleClick: () => void, textareaRef: React.RefObject<HTMLTextAreaElement>}) => {
  return (
    <div className="container">
      <h1>Your memory</h1>
      <form action="#" id="input">
        <label>What would you like to remember?</label>
        <textarea ref={textareaRef} id="memory"></textarea>
        <button onClick={handleClick} type="submit" value="send">send</button>
      </form>

    </div>
  );
};


const Panel: React.FC = () => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const db = new IndexedDb('tulip');
  db.createObjectStore(['memories']);
  let dateTime = new Date();
  console.log("current date is " + dateTime);

  const handleClick = () => {
    let memory = "";
    const text = textareaRef.current.value.trim();


    if (text.length !== 0) {
      console.log(textareaRef.current.value);
      memory = textareaRef.current.value;
      db.putValue('memories', {name: memory});
    }
    

  }

  return (
    <Main handleClick={handleClick} textareaRef={textareaRef} />
    // <div className="container">
    //   <h1>Your memory</h1>
    //   <form action="#" id="input">
    //     <label>What would you like to remember?</label>
    //     <textarea ref={textareaRef} id="memory"></textarea>
    //     <button onClick={handleClick} type="submit" value="send">send</button>
    //   </form>

    // </div>
    
  );
  

};
export default Panel;
