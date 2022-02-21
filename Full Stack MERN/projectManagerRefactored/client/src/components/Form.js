import React from "react";

const Form = (props) => {

    const {product, setProduct, submitHandler} = props;

    const inputHandler = (e) => {
        let newStateObject = {...product};
        newStateObject[e.target.name] = e.target.value;
        console.log(e.target.name, e.target.value);
        setProduct(newStateObject);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label className="form-label">Title</label>
                <input className="form-control" onChange={inputHandler} name="title" value={product.title} type="text" />
                <br/>

                <label className="form-label">Price</label>
                <input className="form-control" onChange={inputHandler} name="price" value={product.price} type="number" />
                <br/>

                <label className="form-label">Description</label>
                <input className="form-control" onChange={inputHandler} name="description" value={product.description} type="text" />
                <br/>

                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    )
}
export default Form;