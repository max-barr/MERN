import React, { useState, useEffect } from 'react';
import axios from "axios";

const PersonForm = (props) => {
    const {initialFirstName, initialLastName, onSubmitProp} = props;

    // keep track of what is typed via useState hook
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);

    // handler for when form is submitted
    const onSubmitHandler = (e) => {
        // prevent default behavior of submit
        e.preventDefault();

        onSubmitProp({ firstName, lastName });
    }

    return (
        <form onSubmit={ onSubmitHandler }>
            <p>
                <label>First Name: </label><br/>
                <input
                type="text"
                name="firstName"
                value={firstName}
                onChange= {(e) => setFirstName(e.target.value)}/>
            </p>
            <p>
            <label>Last Name: </label><br/>
                <input type="text"
                name="lastName"
                value={lastName}
                onChange= {(e) => setLastName(e.target.value)}/>
            </p>
            <input type="submit" />
        </form>
    )
}
export default PersonForm;