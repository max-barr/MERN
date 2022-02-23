import './App.css';
import {Router} from '@reach/router';
import DisplayAllAuthors from './components/DisplayAllAuthors';
import CreateAuthor from './components/CreateAuthor';
import {useState, useEffect} from 'react';
import axios from 'axios';
import UpdateAuthor from './components/UpdateAuthor';
import DisplayOneAuthor from './components/DisplayOneAuthor';


function App() {

  const [ authorList, setAuthorList ] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/authors")
    .then((res) => {
        console.log(res.data);
        setAuthorList(res.data);
    })
    .catch((err) => console.log(err))
  }, [])

  const deleteFilter = (id) => {
    console.log("inside delete filter");
    let newList = authorList.filter((author) => author._id !== id);
    setAuthorList(newList);
  }

  return (
    <div className="container">
      <Router>
        <DisplayAllAuthors path="/" authorList={authorList} setAuthorList={setAuthorList} deleteFilter={deleteFilter}/>
        <CreateAuthor path="/new" authorList={authorList} setAuthorList={setAuthorList}/>
        <DisplayOneAuthor path="/authors/:id" deleteFilter={deleteFilter}/>
        <UpdateAuthor path="/edit/:id" authorList={authorList} setAuthorList={setAuthorList}/>
      </Router>
    </div>
  );
}

export default App;
