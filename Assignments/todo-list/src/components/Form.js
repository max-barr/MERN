import { useState } from "react";

const Form = (props) => {
    const [task, setTask] = useState("");
    const { submitHandler } = props;
    return (
        <form onSubmit={ (e) => submitHandler(e, task) }>
            <label className="form-label">New Task: </label>
            <input className="form-control" value={task} type="text"
            onChange={(e, task) => {
                console.log(e.target.value);
                setTask(e.target.value);
            }} />
            <br/>
            <button type="submit" className="btn btn-primary">Add To List</button>
        </form>
    );
}

export default Form;