import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from 'axios';
import Form from "./Form";

const UpdateProduct = (props) => {

    const {id} = props;

    const [updatedProduct, setUpdatedProduct] = useState({
        title: "",
        price: "",
        description: ""
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res.data);
            setUpdatedProduct(res.data);
        })
        .catch((err) => console.log(err))
    }, [])

    const updateHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, updatedProduct)
        .then((res) => {
            console.log(res);
            navigate("/");
        })
        .catch((err) => console.log(err))
    }


    return (
        <div>
            <Form product={updatedProduct} setProduct={setUpdatedProduct} submitHandler={updateHandler}/>
            <p><Link to={"/"}>Back</Link></p>
        </div>
    )
}
export default UpdateProduct;