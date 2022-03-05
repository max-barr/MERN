import './App.css';
import { Router } from "@reach/router";
import { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayAll from "./components/DisplayAll";
import Create from "./components/Create";
import DisplayOne from "./components/DisplayOne";
import Update from './components/Update';

function App() {

  const [petList, setPetList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/pets")
    .then((res) => {
      console.log(res.data);
      setPetList(res.data);
    })
    .catch((err) => console.log(err))
  }, [])

  const deleteFilter = (id) => {
    console.log("inside delete filter");
    let newList = petList.filter((pet) => pet._id !== id);
    setPetList(newList);
  }

  return (
    <div className="container">
      <h1>Pet Shelter</h1>
      <Router>
        <DisplayAll path="/" petList={petList} setPetList={setPetList}/>
        <Create path="/pets/new" petList={petList} setPetList={setPetList}/>
        <DisplayOne path="/pets/:id" deleteFilter={deleteFilter} />
        <Update path="/pets/edit/:id" petList={petList} setPetList={setPetList}/>
      </Router>
    </div>
  );
}

export default App;
