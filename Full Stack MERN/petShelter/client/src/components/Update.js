import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, navigate } from "@reach/router";

const Update = (props) => {

    const { id, setPetList } = props;

    const [name, setName] = useState();
    const [type, setType] = useState();
    const [description, setDescription] = useState();
    const [skillOne, setSkillOne] = useState();
    const [skillTwo, setSkillTwo] = useState();
    const [skillThree, setSkillThree] = useState();

    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then((res) => {
                console.log(res.data.name);
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkillOne(res.data.skillOne);
                setSkillTwo(res.data.skillTwo);
                setSkillThree(res.data.skillThree);
            })
            .catch((err) => console.log(err))
    }, [id])

    const updatePet = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${id}`, {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
        })
            .then((res) => {
                axios.get("http://localhost:8000/api/pets")
                    .then((res) => {
                        console.log(res.data);
                        setPetList(res.data);
                    })
                    .catch((err) => console.log(err))
                navigate("/")
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    };

    return (
        <div>
            <Link to={"/"}>Back</Link>
            <h2>Edit Details</h2>
            <hr/>
            <form onSubmit={ updatePet }>
                <p>
                    <label className="form-label">Pet Name:</label>
                    <input 
                    className="form-control"
                    value={name}
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
                    value={type} 
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
                    value={description}
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
                    value={skillOne}
                    />
                </p>
                <p>
                    <label className="form-label">Skill 2:</label>
                    <input 
                    className="form-control" 
                    onChange={(e) => setSkillTwo(e.target.value)}
                    type="text"
                    value={skillTwo}
                    />
                </p>
                <p>
                    <label className="form-label">Skill 3:</label>
                    <input 
                    className="form-control" 
                    onChange={(e) => setSkillThree(e.target.value)}
                    type="text"
                    value={skillThree}
                    />
                </p>
                <input type="submit" className="btn btn-primary" value="Edit Pet"/>
            </form>
        </div>
    )

}
export default Update;