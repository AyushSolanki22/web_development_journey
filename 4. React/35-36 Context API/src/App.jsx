import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";

import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";
import { TodoitemsContext } from "./store/todo-items-store";

function App() {
  let [items, setItems] = useState([]);

  let addNewItem = (todoName, todoDate) => {
    let newToDoItems = { name: todoName, dueDate: todoDate };
    setItems([...items, newToDoItems]);
  };

  const deleteItem = (todoItemName) => {
    const newToDoItems = items.filter((item) => item.name !== todoItemName);
    setItems(newToDoItems);
  };

  return (
    <TodoitemsContext.Provider value={{todoItems: items, addNewItem: addNewItem, deleteItem: deleteItem}}>
      <div className="todo-container">
        <AppName></AppName>
        <AddToDo/>
        <WelcomeMessage></WelcomeMessage>
        <ToDoItems></ToDoItems>
      </div>
    </TodoitemsContext.Provider>
  );
}

export default App;
