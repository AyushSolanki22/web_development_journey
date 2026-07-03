import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
// import ToDoItem1 from "./components/ToDoItem1";
// import ToDoItem2 from "./components/ToDoItem2";
import ToDoItems from "./components/ToDoItems";
// import "./App.css";

function App() {
  //array of objects
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name:" like this video",
      dueDate: "right now"
    }
  ];

  return (
    <div class="todo-container">
      <AppName></AppName>
      <AddToDo />
      <ToDoItems todoItems={todoItems}></ToDoItems>
    </div>
  );
}

export default App;
