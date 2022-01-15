import './App.css';
import Person from './components/Person';
import Header from './components/Header';
import PersonCard from './components/PersonCard';

const App = () => {
  return (
    <div className="App">
      <PersonCard firstName={ "Desmond" } lastName={ "Bane" } age={ 24 } hairColor={ "Black" }/>
      <PersonCard firstName={ "Ja" } lastName={ "Morant" } age={ 22 } hairColor={ "Black" }/>
      <PersonCard firstName={ "Steven" } lastName={ "Adams" } age={ 30 } hairColor={ "Brown" }/>
      <PersonCard firstName={ "Dillon" } lastName={ "Brooks" } age={ 25 } hairColor={ "Black" }/>
    </div>
  );
}

export default App;
