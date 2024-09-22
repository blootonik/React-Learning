import React from 'react'
import styles from './App.module.css';
import AppName from './Components/AppName';
import FoodItems from './Components/foodItems';


function App() {
  let foodItems = ["Sabzi", "Green Veg", "Roti", "Salad", "Milk", "Ghee",]
  return (
    <div className={styles.container}>
      <AppName/>
      <FoodItems Items = {foodItems}/>
    </div>
  )
}

export default App