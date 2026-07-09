import { createContext } from "react"

export const TodoitemsContext=createContext({
  todoItems:[], addNewItem: ()=>{}, deleteItem: ()=>{},
});

//by declaring object in store only, it helps in auto completition of code,, functions

