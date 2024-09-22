import React from 'react';
import styles from './Items.module.css';

function Items({foods}) {
  let handleClick = (items)=>{
    alert(`${items} Bought From Us`)
  }
  return (
    <>
    {foods.map(items=> <li key={items} className= {`list-group-item, ${styles.Items}`}><span>{items}</span><button onClick={()=> handleClick(items)} className={styles.buyButton}>Buy Now</button></li>)}
    </>
  )
}

export default Items