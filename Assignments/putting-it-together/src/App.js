import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Ja"} lastName={"Morant"} initialAge={22} hairColor={"Black"} />
      <PersonCard firstName={"Desmond"} lastName={"Bane"} initialAge={23} hairColor={"Brown"} />
      <PersonCard firstName={"Dillon"} lastName={"Brooks"} initialAge={25} hairColor={"Black"} />
      <PersonCard firstName={"Jaren"} lastName={"Jackson"} initialAge={24} hairColor={"Black"} />
    </div>
  );
}

export default App;
