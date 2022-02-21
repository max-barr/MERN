import React from "react";
import axios from "axios";
import { navigate } from "@reach/router";


const DeleteProduct = (props) => {

    const {id, deleteFilter} = props;

    const deleteHandler = (e) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            if(deleteFilter){
                console.log(res.data);
                deleteFilter(id);
            } else {
                console.log(res.data);
                navigate("/");
            }
        })
        .catch((err) => console.log(err))
    }



    return (
        <button className="btn btn-danger btn-sm" onClick={deleteHandler}>Delete</button>
    )
}
export default DeleteProduct;