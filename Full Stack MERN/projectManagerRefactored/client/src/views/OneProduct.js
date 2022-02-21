import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from 'axios';
import DeleteProduct from "../components/DeleteProduct";

const OneProduct = (props) => {

    const {id} = props;
    const [oneProduct, setOneProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res.data);
            setOneProduct(res.data);
        })
        .catch((err) => console.log(err))
    }, [])


    return (
        <div>
            <h1>{oneProduct.title}</h1>
            <p>Price: {oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
            <p><Link to={"/"}>Back</Link></p>
            <p><DeleteProduct id={id} /></p>
        </div>
    )
}
export default OneProduct;