import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import style from "./App.module.css";

function App() {

  return (
    <div className={style.calculator}>
      <Display></Display>
      <ButtonsContainer></ButtonsContainer>
    </div> 
  );
}

export default App;
