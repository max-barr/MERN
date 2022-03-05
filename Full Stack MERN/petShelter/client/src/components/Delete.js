import React from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Delete = (props) => {

    const { id, deleteFilter } = props;

    const deleteHandler = (e) => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
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
        <button className="btn btn-success" onClick={deleteHandler}>Adopt!</button>
    )
}
export default Delete;