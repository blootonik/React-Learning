import React from 'react'
import styles from '../Components/ListItems.module.css';

function ListItems({foods , bought}) {
  let btnClickEvent = (fooditems)=>{
    alert (`Thank You For Buying ${fooditems} From Us`);
  }
  return (
    <ul className={`list-group , ${styles.foodlistContainer}`}>
        {foods.map((fooditems)=>
        <li 
        key="index" 
        className={`list-group-item ${bought && 'active'} `}
        bought = {true}
        ><span>{fooditems}</span><button onClick={()=> btnClickEvent(fooditems)} className={styles.buyBtn}>Buy Now</button></li>)}
    </ul>
  )
}

export default ListItems;