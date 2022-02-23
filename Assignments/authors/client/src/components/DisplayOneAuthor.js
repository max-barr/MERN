import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import DeleteAuthor from "./DeleteAuthor";

const DisplayOneAuthor = (props) => {

    const { id, deleteFilter } = props;
    const [author, setAuthor] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res.data);
                setAuthor(res.data);
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <Link to={"/"}>Home</Link>
            <h1>{author.name}</h1>
            <DeleteAuthor id={id} deleteFilter={deleteFilter} />
        </div>
    )
    
}
export default DisplayOneAuthor;