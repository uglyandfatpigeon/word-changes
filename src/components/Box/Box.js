import React from 'react'

const Box = (props) => {
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshPhongMaterial color={props.color} />
    </mesh>
  )
}

export default Box
