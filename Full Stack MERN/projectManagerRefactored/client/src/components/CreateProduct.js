import React, { useState } from "react";
import axios from 'axios';
import Form from "./Form";

const CreateProduct = (props) => {

    const {productList, setProductList} = props;

    const [newProduct, setNewProduct] = useState({
        title: "",
        price: "",
        description: ""
    });

    const newHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", newProduct)
        .then((res) => {
            console.log(res);
            setProductList([...productList, res.data])

            setNewProduct({
                title: "",
                price: "",
                description: ""
            })
        })
        .catch((err) => console.log(err))
    }


    return (
        <div>
            <Form product={newProduct} setProduct={setNewProduct} submitHandler={newHandler}/>
        </div>
    )
}
export default CreateProduct;