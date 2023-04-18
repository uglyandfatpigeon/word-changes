import React from 'react'
import './styles.css';

const Button = (props) => {
  const className = props.isActive ? "selectSceneButton active" : "selectSceneButton"
  return (
      <button className={className} onClick={props.onClick}>{props.label}</button>
  )
}

export default Button;