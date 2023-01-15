import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

const Box = (props) => {
  const ref = useRef()
  const [hovered, setHover] = useState(false)
  const [rotate, setRotate] = useState(false)

  useFrame((_, delta) => {
    if (rotate) {
      ref.current.rotation.x += delta
      ref.current.rotation.y += 0.5 * delta
    }
  })

  return (
    <mesh
      {...props}
      ref={ref}
      scale={hovered ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onPointerDown={() => setRotate(!rotate)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      <boxGeometry />
      <meshPhongMaterial color={props.color} />
    </mesh>
  )
}

export default Box
