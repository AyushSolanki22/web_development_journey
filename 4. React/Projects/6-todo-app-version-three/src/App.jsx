import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
// import ToDoItem1 from "./components/ToDoItem1";
// import ToDoItem2 from "./components/ToDoItem2";
import ToDoItems from "./components/ToDoItems";
// import "./App.css"
import { useState } from "react";

function App() {
  //array of objects
  // const todoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go to College",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name:" like this video",
  //     dueDate: "right now"
  //   }
  // ];

  let [items, setItems] = useState([]);

  let onButtonClick = (todoName, todoDate) => {
    let newObj = { name: todoName, dueDate: todoDate };
    setItems([...items, newObj]);
  };

  const handleDeleteItem = (todoItemName) => {
    //make new array using filtering not consisiting of the item given in argument for deletion
    const newToDoItems = items.filter((item) => item.name !== todoItemName);
    setItems(newToDoItems);
  };

  return (
    <div className="todo-container">
      <AppName></AppName>
      <AddToDo onButtonClick={onButtonClick} />
      <ToDoItems todoItems={items} onDeleteClick={handleDeleteItem}></ToDoItems>
    </div>
  );
}

export default App;
