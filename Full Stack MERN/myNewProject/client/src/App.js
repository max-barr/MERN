import './App.css';
import React, { useState } from 'react';
import {Router} from '@reach/router';
import axios from 'axios';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';
import Main from './views/Main';
import Detail from './components/Detail';
import Update from './components/Update';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Main path="/people/" default />
        <Detail path="/people/:id" />
        <Update path="/people/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
