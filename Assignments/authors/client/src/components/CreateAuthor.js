import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const CreateAuthor = (props) => {

    const { authorList, setAuthorList } = props;

    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", {
            name
        })
            .then((response) => {
                console.log("Success");
                console.log(response);
                let newAuthor = response.data;
                let updatedAuthorList = [...authorList, newAuthor];
                console.log(updatedAuthorList);
                setAuthorList(updatedAuthorList);
                navigate("/");
            })
            .catch((err) => {
                console.log("Error");
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    };



    return (
        <div>
            <h1>Add Author</h1>
            <Link to={"/"}>Home</Link>
            <form onSubmit={ submitHandler }>
                <p>
                    <label className="form-label">Name:</label>
                    <input 
                    className="form-control" 
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    />
                </p>
                { errors.name ? 
                    <p>{errors.name.message}</p> 
                    : null
                }
                <input className="btn btn-primary" type="submit" />
                <br/><br/>
                <Link to="/">Cancel</Link>
            </form>
        </div>
    )
}
export default CreateAuthor;