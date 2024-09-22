import React from 'react'

function Item(props) {
  return (
    <li key={props.fooditem}className="list-group-item">{props.fooditem}</li>
  )
}

export default Item