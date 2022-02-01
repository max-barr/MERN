const Tasks = (props) => {
    const { taskArray, handleCompleteTask, handleDeleteTask } = props;
    return ( 
        <div>
            {
            taskArray.map((element, index) => {
            return(
                <div key={ index }>
                <p>
                    <label className="form-check-label" htmlFor="flexCheckDefault"></label>
                    <input className="form-check-input" type="checkbox" id="flexCheckDefault"
                    onClick={() => handleCompleteTask(index)} /> 
                    <span style={{ textDecoration: element.complete ? "line-through" : "none"}}> { element.task }</span>
                </p>
                <p>
                    <button className="btn btn-danger btn-sm" onClick={ () => handleDeleteTask(index) } >Remove</button>
                </p>
                <hr/>
                </div>
            )
            })
            }
        </div>
        );
    }

export default Tasks;