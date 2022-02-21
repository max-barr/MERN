import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "@reach/router";
import DeleteButton from './DeleteButton';


const PersonList = (props) => {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/people")
        .then((res) => {
            console.log(res.data);
            console.log(res.data);
            setPeople(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    const removeFromDom = (personId) => {
        setPeople(people.filter(person => person._id != personId))
    }

    return (
        <div>
            {
                people.map((person, index) => {
                    return (
                        <div key={index}>
                            <p><Link to={`/people/${person._id}`}> {person.firstName} {person.lastName} </Link></p>
                            <p>
                                <Link to={"/people/edit/" + person._id}>
                                    Edit
                                </Link> <DeleteButton personId={person._id} successCallback={() => removeFromDom(person._id)}/>
                            </p>
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default PersonList;