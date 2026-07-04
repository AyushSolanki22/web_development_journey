import ToDoItem from "./ToDoItem";

const ToDoItems = ({ todoItems,onDeleteClick }) => {
  return (
    <div className="items-container">
      {todoItems.map((item,index) => (
        <ToDoItem key={index} todoDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick}></ToDoItem>
      ))}
      ;
    </div>
  );
};

export default ToDoItems;
