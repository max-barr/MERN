import React, { useState } from 'react';
import './App.css';
import Box from './components/Box';


function App() {

  const [color, setColor] = useState("");
  const [boxArr, setBoxArr] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    
    // make a copy of getter with spread, add new color
    setBoxArr([...boxArr, color]);

    // remove entry from form with help of value={color} below
    setColor("");
  }

  return (
    <div className="App">
        <h2>Add a color to create a box</h2>
        <form onSubmit={ submitHandler }>
          <div>
            <label>Color: </label>
            <input value={color} type="text" 
            onChange={(e) => setColor(e.target.value)}
            />
            <button type="submit">Add</button>
          </div>
        </form>
        {
          boxArr.map((element, index) => {
            return (
              <Box color={element} key={index}/>
            )
          })
        }
    </div>
  );
}

export default App;
