import './App.css';
import Person from './components/Person';
import Header from './components/Header';
import PersonCard from './components/PersonCard';
import Product from './components/Product';

const App = () => {
  return (
    <div className="App">
      <PersonCard firstName={ "Desmond" } lastName={ "Bane" } initialAge={ 24 } hairColor={ "Black" }/>
      <PersonCard firstName={ "Ja" } lastName={ "Morant" } initialAge={ 22 } hairColor={ "Black" }/>
      <PersonCard firstName={ "Steven" } lastName={ "Adams" } initialAge={ 30 } hairColor={ "Brown" }/>
      <PersonCard firstName={ "Dillon" } lastName={ "Brooks" } initialAge={ 25 } hairColor={ "Black" }/>
    </div>
  );
}

export default App;
