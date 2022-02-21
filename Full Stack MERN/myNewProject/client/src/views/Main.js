import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonForm from "../components/PersonForm";
import PersonList from "../components/PersonList";

const Main = () => {

    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/people")
            .then((res) => {
                setPeople(res.data)
                setLoaded(true)
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    const removeFromDom = (personId) => {
        setPeople(people.filter(person => person._id != personId));
    }

    const createPerson = (person) => {
        axios.post("http://localhost:8000/api/people", person)
            .then((res) => {
                setPeople([...people, res.data]);
            })
            .catch((err) => {
                console.log(err)
            });
    }

    return (
        <div>
            <PersonForm onSubmitProp={createPerson} initialFirstName="" initialLastName="" />
            <hr/>
            {loaded && <PersonList people={people} removeFromDom={removeFromDom} />}
        </div>
    )
}
export default Main;