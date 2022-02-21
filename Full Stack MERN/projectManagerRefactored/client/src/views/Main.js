import React, { useState, useEffect } from "react";
import axios from 'axios';
import CreateProduct from '../components/CreateProduct';
import DisplayAll from '../components/DisplayAll';

const Main = (props) => {

    // List of objects
    const [productList, setProductList] = useState([]);
    // Object
    const [newProduct, setNewProduct] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then((res) => {
            console.log(res.data);
            setProductList(res.data);
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <CreateProduct newProduct={newProduct} setNewProduct={setNewProduct} productList={productList} setProductList={setProductList}/>
            <hr/>
            <h1>Products</h1>
            <DisplayAll newProduct={newProduct} setNewProduct={setNewProduct} productList={productList} setProductList={setProductList}/>
        </div>
    )
}
export default Main;
