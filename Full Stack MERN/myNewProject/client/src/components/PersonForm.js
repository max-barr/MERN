import React, { useState } from 'react';
import axios from "axios";

const PersonForm = (props) => {
    const {people, setPeople} = props;

    // keep track of what is typed via useState hook
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    // handler for when form is submitted
    const onSubmitHandler = (e) => {
        // prevent default behavior of submit
        e.preventDefault();

        // make post request to create new person
        axios.post("http://localhost:8000/api/people", {
            firstName,
            lastName
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                setPeople([...people, res.data]);
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={ onSubmitHandler }>
            <p>
                <label>First Name: </label><br/>
                <input type="text" onChange= {(e) => setFirstName(e.target.value)}/>
            </p>
            <p>
            <label>Last Name: </label><br/>
                <input type="text" onChange= {(e) => setLastName(e.target.value)}/>
            </p>
            <input type="submit" />
        </form>
    )
}
export default PersonForm;