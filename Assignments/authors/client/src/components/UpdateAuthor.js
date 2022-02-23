import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, navigate } from "@reach/router";

const UpdateAuthor = (props) => {

    const { id, setAuthorList } = props;

    const [name, setName] = useState();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res) => {
            console.log(res.data);
            console.log(res.data.name);
            setName(res.data.name);
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const updateAuthor = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/authors/${id}`, { name })
            .then((res) => {
                // METHOD 1
                // console.log(res);
                // let updatedAuthorList = authorList
                // // step 1: get index of author to update in updatedauthorlist
                // let index = updatedAuthorList.findIndex(author => author._id === id);
                // console.log(index);
                // // 2: update author name using index by 
                // updatedAuthorList[index].name = name;
                // // 3: update state
                // setAuthorList(updatedAuthorList);

                // METHOD 2
                axios.get("http://localhost:8000/api/authors")
                    .then((res) => {
                    console.log(res.data);
                    setAuthorList(res.data);
                    })
                    .catch((err) => console.log(err))
            
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    };

    return (
        <div>
            <h1>Update Author</h1>
            <Link to={"/"}>Home</Link>
            <form onSubmit={ updateAuthor }>
                <p>
                    <label className="form-label">Name:</label>
                    <input 
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
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
export default UpdateAuthor;