import React from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const DeleteAuthor = (props) => {
    
    const { id, deleteFilter } = props;

    const deleteHandler = (e) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then((res) => {
            if(deleteFilter){
                console.log(res.data);
                deleteFilter(id);
                navigate("/")
            } else {
                console.log(res.data);
            }
        })
        .catch((err) => console.log(err))
    }

    return (
        <button className="btn btn-danger" onClick={deleteHandler}>Delete</button>
    )
}
export default DeleteAuthor;