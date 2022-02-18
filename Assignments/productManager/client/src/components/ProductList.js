import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const ProductList = (props) => {

    const { product, setProduct, removeFromDom } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
        .then((res) => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    const deleteProduct = (productId) => {
        axios.delete("http://localhost:8000/api/product/" + productId)
            .then((res) => {
                removeFromDom( productId )
                console.log("Deleted");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            {
                product.map((product, index) => {
                return (
                    <div key={index}>
                        <p>
                            <Link to={`/product/${product._id}`}> {product.title}</Link><br/>
                            <Link to={`/product/edit/${product._id}`} >Update</Link><br/>
                            <button className="btn btn-danger btn-sm" onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                        </p><hr/>
                    </div>
                )})
            }
        </div>
    )
}
export default ProductList;