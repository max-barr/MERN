import './App.css';
import {Router} from '@reach/router';
import Main from './views/Main';
import OneProduct from './views/OneProduct';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className='container'>
      <Router>
        <Main path="/" />
        <OneProduct path="/products/:id" />
        <UpdateProduct path="/products/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
