import React, {useState} from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);

  // function to add a new task to the list
  const submitHandler = (e) => {
    e.preventDefault();
    
    // create a new task as an object 
    const newTask = {
      task: task,
      complete: false,
    }
    // make a copy of task array with spread, add newest task
    setTaskArray([...taskArray, newTask]);

    // clear input with help of value property
    setTask("");
  }

  // function to change task's complete property to true after checkbox is clicked
  const handleCompleteTask = (indexFromBelow) => {
  
    // Task to update is a copy of the individual task's index using spread operator
    let taskToUpdate = {...taskArray[indexFromBelow]};

    // setting its complete key to the opposite
    taskToUpdate.complete = !taskToUpdate.complete;

    // resetting the array by slicing it from the beginning (index 0) up to the index of the completed task
    // then adding the updated task (taskToUpdate)
    // then using concat to add another slice because the 2nd parameter is not inclusive
    setTaskArray(
      [...taskArray.slice(0, indexFromBelow), taskToUpdate]
      .concat(
        taskArray.slice(indexFromBelow + 1)
      )
    )
  }

  // function to delete tasks from list
  const handleDeleteTask = (indexFromBelow) => {
    
    // filter array to return all indexes that don't match index from below, thus deleting object
    const fileredArray = taskArray.filter((element, index) => index !== indexFromBelow);
    
    // set the task array to the filtered array
    setTaskArray(fileredArray);
  }

  // function to check style for checked tasks
  const checkStyle = (indexFromBelow) => {

  }

  return (
    <div className="container">
      <h1>To-do List</h1>
      <form onSubmit={ submitHandler }>
        <label class="form-label">New Task: </label>
        <input class="form-control" value={task} type="text"
        onChange={(e) => {
        setTask(e.target.value)
        }} />
        <br/>
        <button type="submit" class="btn btn-primary">Add To List</button>
      </form>
      <hr/>
      <h3>Current Tasks</h3>
      {
        taskArray.map((element, index) => {
          return(
            <div key={ index }>
              <p>
                <label class="form-check-label" for="flexCheckDefault"></label>
                <input class="form-check-input" type="checkbox" id="flexCheckDefault"
                onClick={() => handleCompleteTask(index)} /> 
                <span style={{ textDecoration: element.complete ? "line-through" : "none"}}> { element.task }</span>
              </p>
              <p>
                <button class="btn btn-danger btn-sm" onClick={ () => handleDeleteTask(index) } >Remove</button>
              </p>
              <hr/>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;