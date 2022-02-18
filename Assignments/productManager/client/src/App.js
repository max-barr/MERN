import './App.css';
import React, { useState } from 'react';
import {Router} from '@reach/router';
import Main from './views/Main';
import Detail from './components/Detail';
import Update from './components/Update';



function App() {
  return (
    <div className="container-sm">
      <Router>
        <Main path="/home" default />
        <Detail path="/product/:id" />
        <Update path="/product/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
