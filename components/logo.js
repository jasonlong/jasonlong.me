import { Canvas, useFrame } from 'react-three-fiber'
import { Suspense, useRef, useMemo } from "react"
import * as THREE from 'three'

function Model() {
  const SIZE = 10

  const jMatArray = useMemo(() => [
    new THREE.MeshBasicMaterial({color:0xD53F8C}),
    new THREE.MeshBasicMaterial({color:0xD53F8C}),
    new THREE.MeshBasicMaterial({color:0xF687B3}),
    new THREE.MeshBasicMaterial({color:0xF687B3}),
    new THREE.MeshBasicMaterial({color:0xD53F8C}),
    new THREE.MeshBasicMaterial({color:0xD53F8C})
  ])

  const midMatArray = useMemo(() => [
    new THREE.MeshBasicMaterial({color:0x667EEA}),
    new THREE.MeshBasicMaterial({color:0x667EEA}),
    new THREE.MeshBasicMaterial({color:0xB794F4}),
    new THREE.MeshBasicMaterial({color:0xB794F4}),
    new THREE.MeshBasicMaterial({color:0xD53F8C}),
    new THREE.MeshBasicMaterial({color:0xD53F8C})
  ])

  const lMatArray = useMemo(() => [
    new THREE.MeshBasicMaterial({color:0x667EEA}),
    new THREE.MeshBasicMaterial({color:0x667EEA}),
    new THREE.MeshBasicMaterial({color:0x7F9CF5}),
    new THREE.MeshBasicMaterial({color:0x7F9CF5}),
    new THREE.MeshBasicMaterial({color:0xD53F8C}),
    new THREE.MeshBasicMaterial({color:0xD53F8C})
  ])

  return (
    <object3D>
      <mesh position={[-SIZE * 2, -SIZE, 0]} material={jMatArray}>
        <boxBufferGeometry attach="geometry" args={[SIZE, SIZE, SIZE]} />
      </mesh>
      <mesh position={[-SIZE * 2, 0, 0]} material={jMatArray}>
        <boxBufferGeometry attach="geometry" args={[SIZE, SIZE, SIZE]} />
      </mesh>

      <mesh position={[-SIZE , -SIZE, 0]} material={jMatArray}>
        <boxBufferGeometry attach="geometry" args={[SIZE, SIZE, SIZE]} />
      </mesh>

      <mesh position={[0, -SIZE, 0]} material={midMatArray}>
        <boxBufferGeometry attach="geometry" args={[SIZE, SIZE, SIZE]} />
      </mesh>
      <mesh position={[0, 0, 0]} material={midMatArray}>
        <boxBufferGeometry attach="geometry" args={[SIZE, SIZE, SIZE]} />
      </mesh>
      <mesh position={[0, SIZE, 0]} material={midMatArray}>
        <boxBufferGeometry attach="geometry" args={[SIZE, SIZE, SIZE]} />
      </mesh>
      <mesh position={[0, SIZE * 2, 0]} material={midMatArray}>
        <boxBufferGeometry attach="geometry" args={[SIZE, SIZE, SIZE]} />
      </mesh>

      <mesh position={[0, -SIZE, -SIZE]} material={lMatArray}>
        <boxBufferGeometry attach="geometry" args={[SIZE, SIZE, SIZE]} />
      </mesh>
      <mesh position={[0, -SIZE, -SIZE * 2]} material={lMatArray}>
        <boxBufferGeometry attach="geometry" args={[SIZE, SIZE, SIZE]} />
      </mesh>
    </object3D>
  )
}

export default function Logo() {
  if (typeof window !== 'undefined') {
    return (
      <div style={{width: '48px', height: '48px'}}>
        <Canvas
          invalidateFrameloop={true}
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
      <div style={{width: '48px', height: '48px'}} />
    )
  }

}
