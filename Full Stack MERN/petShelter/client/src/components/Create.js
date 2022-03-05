import { Link, navigate } from "@reach/router";
import axios from "axios";
import React, { useState } from "react";

const Create = (props) => {

    const { petList, setPetList } = props;

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");

    const [errors, setErrors] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets", {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
        })
            .then((response) => {
                console.log("Success");
                console.log(response);
                let newPet = response.data;
                let updatedPetList = [...petList, newPet];
                console.log(updatedPetList);
                setPetList(updatedPetList);
                navigate("/");
            })
            .catch((err) => {
                console.log("Error");
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    };

    return (
        <div>
            <Link to={"/"}>Back</Link>
            <h2>Know a pet needing a home?</h2>
            <form onSubmit={ submitHandler }>
                <p>
                    <label className="form-label">Pet Name:</label>
                    <input 
                    className="form-control" 
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    />
                </p>
                { errors.name ? 
                    <p>{errors.name.message}</p> 
                    : null
                }
                <p>
                    <label className="form-label">Pet Type:</label>
                    <input 
                    className="form-control" 
                    onChange={(e) => setType(e.target.value)}
                    type="text"
                    />
                </p>
                { errors.type ? 
                    <p>{errors.type.message}</p> 
                    : null
                }
                <p>
                    <label className="form-label">Pet Description:</label>
                    <input 
                    className="form-control" 
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    />
                </p>
                { errors.description ? 
                    <p>{errors.description.message}</p> 
                    : null
                }
                <p>Skills (Optional)</p>
                <p>
                    <label className="form-label">Skill 1:</label>
                    <input 
                    className="form-control" 
                    onChange={(e) => setSkillOne(e.target.value)}
                    type="text"
                    />
                </p>
                <p>
                    <label className="form-label">Skill 2:</label>
                    <input 
                    className="form-control" 
                    onChange={(e) => setSkillTwo(e.target.value)}
                    type="text"
                    />
                </p>
                <p>
                    <label className="form-label">Skill 3:</label>
                    <input 
                    className="form-control" 
                    onChange={(e) => setSkillThree(e.target.value)}
                    type="text"
                    />
                </p>
                <input type="submit" className="btn btn-primary" value="Add Pet"/>
            </form>
        </div>
    )
}
export default Create;

