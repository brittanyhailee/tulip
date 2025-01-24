import React from 'react';
import './Panel.css';

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

export default Panel;
