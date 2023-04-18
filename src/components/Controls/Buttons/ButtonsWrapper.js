import React from 'react'
import './styles.css'
import Button from '../Button'

const ButtonsWrapper = (props) => {
  return (
    <div className="buttonsComponent">
      {props.buttons.map((button, index) => {
        return (
          <Button
            label={button.label}
            onClick={() => props.setActiveComponent(props.buttons[index])}
            key={index}
            isActive={props.activeComponent === index}
          />
        )
      })}
    </div>
  )
}

export default ButtonsWrapper
