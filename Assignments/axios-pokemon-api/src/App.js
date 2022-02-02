import './App.css';
import React, {useEffect, useState} from "react";
import axios from 'axios';


function App() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        setPokemon(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Pokemon</h1>
      {pokemon.map((pokemon, index) => {
        return <div key={index}>{pokemon.name}</div>
      })}
    </div>
  );
}

export default App;
