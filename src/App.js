import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats, Environment } from '@react-three/drei'
// import Box from './components/Box'
import { useControls } from 'leva'
import { useMemo } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Model() {
  const gltf = useLoader(GLTFLoader, './model/treasure_chest.gltf')
  return <primitive object={gltf.scene} scale={'10'} position={[0, -8, 0]} />
}

function App() {
  // const options = useMemo(() => {
  //   return {
  //     color: { value: 'blue' }
  //   }
  // }, [])
  //
  // const pA = useControls('A', options)
  // const pB = useControls('B', options)

  return (
    <Canvas camera={{ position: [0, 3, 3], near: 0.025 }}>
      <OrbitControls />
      <pointLight position={[10, 10, 10]} />

      <Environment files="./img/interior.hdr" background />
      <Model />

      {/*<Box position={[-0.75, 0.5, 0]} name="A" color={pA.color} />*/}
      {/*<Box position={[0.75, 0.5, 0]} name="B" color={pB.color} />*/}

      {/*<gridHelper />*/}
      {/*<axesHelper args={[5]} />*/}
      <Stats />
    </Canvas>
  )
}

export default App
