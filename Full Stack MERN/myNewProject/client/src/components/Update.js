import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import PersonForm from './PersonForm';
import DeleteButton from './DeleteButton';


const Update = (props) => {
    const { id } = props;

    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/people/${id}`)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const updatePerson = (person) => {
        axios.put(`http://localhost:8000/api/people/${id}`, person)
            .then((res) => {
                console.log(res);
                navigate("/people");
            })
    }

    return (
        <div>
            <h1>Update a Person</h1>
            {loaded && (
                <>
                    <PersonForm
                        onSubmitProp={updatePerson}
                        initialFirstName={person.firstName}
                        initialLastName={person.lastName}
                    />
                    <br/>
                    <DeleteButton personId={person._id} successCallback={() => navigate("/people")} />
                    <br/>
                    <Link to={"/people/"}>Home</Link>
                </>
            )}
        </div>
    )
}
export default Update;