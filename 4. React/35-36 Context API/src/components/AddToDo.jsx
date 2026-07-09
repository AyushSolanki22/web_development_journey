import { useContext, useState } from "react";
import { TodoitemsContext } from "../store/todo-items-store";

function AddToDo() {
  const {addNewItem}=useContext(TodoitemsContext)
  
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleAddButton = () => {
    addNewItem(todoName, todoDate);

    // Clear the inputs
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            id="input"
            type="text"
            placeholder="Enter Todo here"
            value={todoName}
            onChange={(event) => setTodoName(event.target.value)}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={todoDate}
            onChange={(event) => setTodoDate(event.target.value)}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButton}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
