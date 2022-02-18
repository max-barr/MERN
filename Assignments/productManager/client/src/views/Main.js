import React, { useState } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Main = () => {

    const [product, setProduct] = useState([]);

    const removeFromDom = (productId) => {
        setProduct(product.filter(product => product._id != productId));
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <ProductForm product={product} setProduct={setProduct} />
            <hr />
            <ProductList product={product} setProduct={setProduct} removeFromDom={removeFromDom}/>
        </div>
    )
}
export default Main;