import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats, Environment } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Model() {
  const gltf = useLoader(
    GLTFLoader,
    './models/treasureChest/treasure_chest.gltf'
  )
  return <primitive object={gltf.scene} scale={'10'} position={[0, -8, 0]} />
}

const Deuxieme = () => {
  return (
    <Canvas camera={{ position: [0, 3, 3], near: 0.025 }}>
      <OrbitControls />
      <pointLight position={[10, 10, 10]} />

      <Environment files="./img/interior.hdr" background />
      <Model />

      <Stats />
    </Canvas>
  )
}

export default Deuxieme
