import { useContext } from "react";
import { TodoitemsContext } from "../store/todo-items-store";
import ToDoItem from "./ToDoItem";

const ToDoItems = () => {
  const { todoItems } = useContext(TodoitemsContext);

  return (
    <div className="items-container">
      {todoItems.map((item, index) => (
        <ToDoItem
          key={index}
          todoDate={item.dueDate}
          todoName={item.name}
        ></ToDoItem>
      ))}
      ;
    </div>
  );
};

export default ToDoItems;
