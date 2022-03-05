import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import Delete from "./Delete";

const DisplayOne = (props) => {

    const { id, deleteFilter } = props;
    const [pet, setPet] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then((res) => {
                console.log(res.data);
                setPet(res.data);
            })
            .catch((err) => console.log(err))
    }, [id])

    return (
        <div>
            <Link to={"/"}>Back</Link>
            <h2>Details about {pet.name}</h2>
            <hr/>
            <p>Pet type: {pet.type}</p>
            <p>Description: {pet.description}</p>
            <p>Skills: {pet.skillOne} {pet.skillTwo} {pet.skillThree}</p>
            <Delete id={id} deleteFilter={deleteFilter}/>
        </div>
    )
}
export default DisplayOne;