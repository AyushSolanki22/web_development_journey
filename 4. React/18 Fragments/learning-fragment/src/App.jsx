import React from "react";
import "./App.css";

function App() {
  // let foodItems=[];
  let foodItems=["Dal","Green Vegetables","Roti","Salad","Milk"];

  return (
    <>
      <h1>Healthy Food</h1>
      {foodItems.length==0 && <h3>I am still hungry.</h3>}
      <ul class="list-group">
        {foodItems.map((item)=> (<li class="list-group-item">{item}</li>))}
      </ul> 
    </>
  );
}

export default App;
