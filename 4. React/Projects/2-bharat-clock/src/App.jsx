import AppName from "./components/AppName";
import Text1 from "./components/Text1";
import Clock from "./components/Clock";
import "./App.css";

function App() {
  return (
    <div class="clock container">
      <AppName></AppName>
      
        <Text1></Text1>
        <Clock></Clock>
      
    </div>
  );
}

export default App;
