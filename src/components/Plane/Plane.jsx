import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Plane = () => {
  const ref = useRef()
  const gltf = useLoader(GLTFLoader, './models/airplane/scene.gltf')

  useFrame((_, delta) => {
    ref.current.rotation.y += 0.3 * delta
  })

  return (
    <primitive object={gltf.scene} scale="1" position={[0, 0, -15]} ref={ref} />
  )
}

export default Plane
