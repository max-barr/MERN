import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';

const Update = (props) => {

    const {id} = props;

    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/product/${id}`, { title, price, description })
            .then((res) => {
                console.log(res);
                navigate("/home");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.err.errors);
            });
    }

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={ updateProduct }>
                <p>
                    <label className="form-label">Title:</label>
                    <input className="form-control" type="text" value={title} onChange= {(e) => {setTitle(e.target.value)}}/>
                </p>
                {errors.title ? <p>{errors.title.message}</p> : null}
                <p>
                    <label className="form-label">Price: </label>
                    <input className="form-control" type="text" value={price} onChange= {(e) => {setPrice(e.target.value)}}/>
                </p>
                {errors.price ? <p>{errors.price.message}</p> : null}
                <p>
                    <label className="form-label">Description: </label>
                    <input className="form-control" type="text" value={description} onChange= {(e) => {setDescription(e.target.value)}}/>
                </p>
                {errors.description ? <p>{errors.description.message}</p> : null}
                <input type="submit" className="btn btn-primary"/>
            </form>
            <br/>
            <Link to="/home">Back</Link>
        </div>
    )
}
export default Update;