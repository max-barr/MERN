import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import WordOrNumber from './components/WordOrNumber';
import WordWithColor from './components/WordWithColor';


function App() {
  return (
    <div className="App">
      <Router>
        <WordWithColor path="/:greeting/:color/:bgcolor"/>
        <WordOrNumber path="/:arg"/>
        <Home path="/home"/>
      </Router>
    </div>
  );
}

export default App;
