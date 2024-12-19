import { useRef, useState } from "react";
import { GrAdd } from "react-icons/gr";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const noOfUpdates = useRef(0);

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    noOfUpdates.current += 1;
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
    console.log(`noofUpdates are :${noOfUpdates.current}`)
  };

  const handleAddButtonClick = (event) => {
    // console.log(event);
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setDueDate("");  //to clear the input section for the next entry
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row item-row"
            onSubmit={handleAddButtonClick}
            >
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
             type="submit"
            className="btn btn-success"
            // onClick={}
          >
           <GrAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
