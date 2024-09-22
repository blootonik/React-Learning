import React from 'react'
import styles from './FoodItems.module.css';
import Items from './Items';

function FoodItems(props) {
  return (
    <ul className="list-group" id={styles.listGroup}>
        <Items foods = {props.Items}/>
    </ul>
  )
}

export default FoodItems