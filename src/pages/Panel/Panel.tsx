import React, {useEffect, useState} from 'react';
import './Panel.css';
import IndexedDb from './indexedDb';

export const Test = () => {
  useEffect(() => {
      const runIndexDb = async () => {
          const indexedDb = new IndexedDb('test');
          await indexedDb.createObjectStore(['books', 'students']);
          await indexedDb.putValue('books', { name: 'A Game of Thrones' });
          await indexedDb.putBulkValue('books', [{ name: 'A Song of Fire and Ice' }, { name: 'Red Dirt Heart' }]);
          await indexedDb.getValue('books', 1);
          await indexedDb.getAllValue('books');
          await indexedDb.deleteValue('books', 1);
      }
      runIndexDb();
  }, []);
  return (<React.Fragment></React.Fragment>)
}



const Panel: React.FC = () => {

  return (
    <div className="container">
      <h1>Your memory</h1>
      <form action="#" id="input">
        <label>What would you like to remember?</label>
        <textarea id="memory"></textarea>
        <input type="submit" value="send"></input>
      </form>

    </div>
    
  );
  

};

export default Test;
