import logo from './logo.svg';
import './App.css';
import React from 'react';
import ProductForm from './components/ProductForm';


function App() {
  return (
    <div className="container-sm">
      <h1>Product Manager</h1>
      <ProductForm />
    </div>
  );
}

export default App;
