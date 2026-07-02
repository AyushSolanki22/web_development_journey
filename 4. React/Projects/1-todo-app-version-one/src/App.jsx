import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItem1 from "./components/ToDoItem1";
import ToDoItem2 from "./components/ToDoItem2";
// import "./App.css";

function App() {
  return (
    <div class="todo-container">
      <AppName></AppName>
      <AddToDo />
      <div className="items-container">
      <ToDoItem1></ToDoItem1>
      <ToDoItem2></ToDoItem2>
      </div>
    </div>
  );
}

export default App;
