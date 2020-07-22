import { Canvas, useFrame } from 'react-three-fiber'

export default function Logo() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </Canvas>
  )
}

