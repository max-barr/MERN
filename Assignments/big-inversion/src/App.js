import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Ja"} lastName={"Morant"} age={22} hairColor={"Black"} />
      <PersonCard firstName={"Desmond"} lastName={"Bane"} age={23} hairColor={"Brown"} />
      <PersonCard firstName={"Dillon"} lastName={"Brooks"} age={25} hairColor={"Black"} />
      <PersonCard firstName={"Jaren"} lastName={"Jackson"} age={24} hairColor={"Black"} />
    </div>
  );
}

export default App;
