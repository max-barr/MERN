import { Link, navigate } from "@reach/router";
import React from "react";
import DeleteAuthor from "./DeleteAuthor";

const DisplayAllAuthors = (props) => {

    const {authorList, deleteFilter} = props;

    const editButtonHandler = (id) => {
        navigate(`/edit/${id}`);
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={"/new"}>Add New Author</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {authorList.map((author, index) => {
                        return (
                            <tr key={index}>
                                <td>{author.name}</td>
                                <td>
                                    <button className="btn btn-warning" onClick={() => editButtonHandler(author._id)}>Edit</button>

                                    <DeleteAuthor deleteFilter={deleteFilter} id={author._id}/>
                                    <Link to={`/authors/${author._id}`}>Details</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default DisplayAllAuthors;