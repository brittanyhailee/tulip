import React, {useEffect, useState} from 'react';
import './Panel.css';
// import IndexedDb from './indexedDb';
import Test from './DB'; 
import IndexedDb from '../../db/indexedDb';


const Main = () => {
  return (
    <div>
      <h1>Welcome to the Main Page</h1>
      {/* Use the Test component here */}
      <Test />
    </div>
  );
};

// await indexedDb.putValue('memories', { name: 'Don\'t judge each day by the harvest you reap but by the seeds that you plant.'});


const Panel: React.FC = () => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const db = new IndexedDb('test');
  db.createObjectStore(['memories']);


  const handleClick = () => {
    if (textareaRef.current) {
      console.log(textareaRef.current.value);

    }
    db.putValue('memories', {name: textareaRef.current.value} );

  }

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
export default Panel;
