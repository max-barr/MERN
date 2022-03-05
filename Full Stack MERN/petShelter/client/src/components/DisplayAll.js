import { Link } from "@reach/router";
import React from "react";


const DisplayAll = (props) => {

    const { petList } = props;

    return (
        <div>
            <Link to={"/pets/new"}>Add a pet to the shelter</Link>
            <h2>These pets are looking for a good home</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { petList.map((pet, index) => {
                        return (
                            <tr key={index}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>
                                    <Link to={`/pets/${pet._id}`}>Details</Link> | <Link to={`/pets/edit/${pet._id}`}>Edit</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default DisplayAll;