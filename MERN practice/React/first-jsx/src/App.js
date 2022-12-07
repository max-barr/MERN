import React from 'react';
import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>List of things to do:</h2>
      <ul>-Walk the dog</ul>
      <ul>-Buy groceries</ul>
      <ul>-Wash dishes</ul>
      <ul>-Build React app</ul>
      <Person />
    </div>
  );
}

export default App;
