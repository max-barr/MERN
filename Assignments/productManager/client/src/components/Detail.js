import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import { navigate } from "@reach/router";

const Detail = (props) => {
    const [product, setProduct] = useState({});
    const {id} = props;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate("/home");
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p><button className="btn btn-danger" onClick={deleteHandler}>Delete</button></p>
            <p><Link to="/home">Back</Link></p>
        </div>
    )
}
export default Detail;