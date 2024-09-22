import React from 'react'
import styles from '../Components/Container.module.css'
function Container(props) {
  return (
    <div>{props.children}</div>
  )
}

export default Container