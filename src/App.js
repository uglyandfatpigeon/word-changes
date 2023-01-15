import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from './components/Box'

function App() {
  return (
    <Canvas camera={{ position: [0, 3, 3], near: 0.025 }}>
      <OrbitControls />
      <pointLight position={[10, 10, 10]} />

      <Box position={[-0.75, 0.5, 0]} name="A" color="purple" />
      <Box position={[0.75, 0.5, 0]} name="B" color="red" />

      <gridHelper />
      <axesHelper args={[5]} />
    </Canvas>
  )
}

export default App
