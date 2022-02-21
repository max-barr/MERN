import React from "react";
import { Link } from "@reach/router";
import DeleteProduct from "./DeleteProduct";

const DisplayAll = (props) => {

    const {productList, setProductList} = props;

    const deleteFilter = (id) => {
        console.log("inside delete filter");
        let newList = productList.filter((product) => product._id !== id);
        setProductList(newList);
    }

    return (
        <div>
            {
                productList.map((product, index) => {
                    return (
                        <div key={index}>
                            <p><Link to={`/products/${product._id}`}>{product.title}</Link></p>
                            <Link to={`/products/edit/${product._id}`}>Edit</Link><br/>
                            <DeleteProduct deleteFilter={deleteFilter} id={product._id}/>
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default DisplayAll;