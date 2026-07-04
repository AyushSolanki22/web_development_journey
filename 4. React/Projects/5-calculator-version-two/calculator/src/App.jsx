import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import style from "./App.module.css";
import { useState } from "react";

function App() {

  let [calVal,setCalVal] = useState("");

  let onButtonClick=(event,btnText)=>{
    // setDisplay(display+item)
    if(btnText==='C'){
      setCalVal("") 
    }
    else if(btnText==='='){
      const result=eval(calVal);   //eval method evaluate string -- it allows string as argument
      setCalVal(result)
    }
    else{
      const newDisplay=calVal+btnText;
      setCalVal(newDisplay)
    }
    
  }


  return (
    <div className={style.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer  onButtonClick={onButtonClick}></ButtonsContainer>
    </div> 
  );
}

export default App;
