import React from 'react'
import styles from './index.module.css'

function IconButton(props) {
  return (
    <div className={styles["icon-button"]} style={props.style} onClick={props.onClick}>
      {props.icon}
    </div>
  )
}

export default IconButton;