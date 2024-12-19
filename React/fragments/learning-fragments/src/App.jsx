import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/container";
import FoodInput from "./components/FoodInput";

function App() {
  // let foodItems = ["Sabzi", "Green Vegetables", "Roti",
  //   "Salad", "Milk", "Ghee"];

  // let textStateArr = useState('Food item Entered by user');
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1]
  // console.log(`current value of text state ${textToShow}`)
  // // console.log(`next value of text state ${setTextState}`)

  let [foodItems, setFoodItems] = useState(["Green Vegetables", "Roti",
    "Salad"])




  const OnKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value; // add value in newfooditem
      event.target.value = ""; //clear all data from input
      let newItems = [...foodItems,newFoodItem] // save existing and new items
      setFoodItems(newItems);
      console.log(`the new food item is ${newFoodItem}`)
    }
  };

  return (<>
    <Container>
      <h1>Healthy Food </h1>
      <ErrorMsg items={foodItems}></ErrorMsg>
      <FoodInput handleOnKeyDown={OnKeyDown}></FoodInput>
      {/* <p>{textToShow}</p> */}
      <FoodItems items={foodItems}></FoodItems>
    </Container>
    {/* <Container>
      <p>above is the list of healthy food </p>
    </Container> */}
  </>
  );
}

export default App;
