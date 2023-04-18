import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei'
import { useControls } from 'leva'
import { useMemo } from 'react'
import Box from '../../components/Box'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const Premier = () => {
  const [bricks, tiles] = useLoader(TextureLoader, [
    './textures/bricks.jpg',
    './textures/tiles.jpg'
  ])
  const options = useMemo(() => {
    return {
      color: { value: 'blue' }
    }
  }, [])

  const pA = useControls('A', options)
  const pB = useControls('B', options)
  return (
    <Canvas
      camera={{ position: [0, 3, 3], near: 0.025 }}
      style={{ backgroundColor: 'black' }}>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />

      <Box
        position={[-0.75, 0.5, 0]}
        name="A"
        color={pA.color}
        mapTexture={bricks}
      />
      <Box
        position={[1.75, 0.5, 0]}
        name="B"
        color={pB.color}
        mapTexture={tiles}
      />

      <gridHelper />
      <axesHelper args={[5]} />
      <Stats />
    </Canvas>
  )
}

export default Premier
