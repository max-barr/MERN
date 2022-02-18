import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {

    const {product, setProduct} = props;

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    // errors are keys, values in an object
    const [errors, setErrors] = useState({});

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
            .then((response) => {
                console.log("Success");
                console.log(response);
                // update lifted state of product array to include current value in state plus the single new object created and returned from post request
                setProduct([...product, response.data]);
            })
            .catch((err) => {
                console.log("Error");
                console.log(err);
                console.log(err.response);
                console.log(err.response.data);
                console.log(err.response.data.err);
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            })
    };

    return (
        <form onSubmit={ onSubmitHandler }>
            <p>
                <label className="form-label">Title: </label>
                <input className="form-control" type="text" onChange= {(e) => setTitle(e.target.value)}/>
            </p>
            {errors.title ? <p>{errors.title.message}</p> : null}
            <p>
                <label className="form-label">Price: </label>
                <input className="form-control" type="text" onChange= {(e) => setPrice(e.target.value)}/>
            </p>
            {errors.price ? <p>{errors.price.message}</p> : null}
            <p>
                <label className="form-label">Description: </label>
                <input className="form-control" type="text" onChange= {(e) => setDescription(e.target.value)}/>
            </p>
            {errors.description ? <p>{errors.description.message}</p> : null}
            <input type="submit" className="btn btn-primary" />
        </form>
    )
}
export default ProductForm;