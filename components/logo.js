import { Canvas, useFrame } from 'react-three-fiber'
import { Suspense, useRef } from "react"

function Model() {
  const SIZE = 10

  return (
    <object3D>
      <mesh position={[0, 0, 0]}>
        <boxBufferGeometry attach="geometry" args={[SIZE, SIZE, SIZE]} />
        <meshBasicMaterial attach="material" color="#D53F8C" />
      </mesh>
    </object3D>
  )
}

export default function Logo() {
  if (typeof window !== 'undefined') {
    return (
      <div style={{width: '48px', height: '48px'}}>
        <Canvas
          pixelRatio={window.devicePixelRatio > 1 ? 2 : 1}
          orthographic={true}
          camera={{ position: [1000, 1000, 1000], near: 1, far: 5000 }}
        >
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </div>
    )
  } else {
    return (
      <div className="bg-gray-200" style={{width: '48px', height: '48px'}} />
    )
  }

}
