import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    // handler for when form is submitted
    const onSubmitHandler = (e) => {
        // prevent default behavior of submit
        e.preventDefault();

        // post request to create new product
        axios.post("http://localhost:8000/api/product", {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    };

    return (
        <form onSubmit={ onSubmitHandler }>
            <p>
                <label className="form-label">Title: </label>
                <input className="form-control" type="text" onChange= {(e) => setTitle(e.target.value)}/>
            </p>
            <p>
                <label className="form-label">Price: </label>
                <input className="form-control" type="text" onChange= {(e) => setPrice(e.target.value)}/>
            </p>
            <p>
                <label className="form-label">Description: </label>
                <input className="form-control" type="text" onChange= {(e) => setDescription(e.target.value)}/>
            </p>
            <input type="submit" className="btn btn-primary" />
        </form>
    )
}
export default ProductForm;