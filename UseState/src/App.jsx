import React, { useState } from 'react'
import styles from "./App.module.css";
import AppName from './Components/AppName';
import Input from './Components/Input';
import ListItems from './Components/ListItems';

function App() {
  // let foodItems = ['Roti', "Salad", "Green Vegitables", "Paneer", "Dry Fruits", "Maggie"];

  // const [textToShow , SettextToShow]= useState("");
  const [foodItems, setfooItems] = useState([])

  let onKeyDown = (event)=>{
    // console.log(event)
      if(event.key === "Enter"){

        let newFoodItem = event.target.value;
        console.log(newFoodItem);
        setfooItems([...foodItems, newFoodItem])
        event.target.value = "";
      }
  };
  return (
      <div className={styles.container}>
        <AppName/>
        <Input handleKeyDown = {onKeyDown} />
        <ListItems foods = {foodItems}/>
      </div>
  )
}

export default App