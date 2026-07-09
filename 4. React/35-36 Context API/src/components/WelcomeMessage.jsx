import { useContext } from "react";
import styles from "./WelcomeMessage.module.css"
import { TodoitemsContext } from "../store/todo-items-store";

const WelcomeMessage =()=>{
    const contextObj=useContext(TodoitemsContext);
    const todoItems=contextObj.todoItems

    return todoItems.length==0 && <p className={styles.welcome}>Enjoy Your Day</p>
}


export default WelcomeMessage