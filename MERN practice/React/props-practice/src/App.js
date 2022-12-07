import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={ "Jason" } lastName={ "Tatum" } age={ 14 } hairColor={ "Black" }/>
      <PersonCard firstName={ "Jalen" } lastName={ "Brown" } age={ 26 } hairColor={ "Black" }/>
      <PersonCard firstName={ "Derrick" } lastName={ "White" } age={ 30 } hairColor={ "Black" }/>
      <PersonCard firstName={ "Sam" } lastName={ "Hauser" } age={ 25 } hairColor={ "Brown" }/>
    </div>
  );
}

export default App;
