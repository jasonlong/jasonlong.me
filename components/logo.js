/* eslint-disable object-curly-newline */
/* eslint-disable global-require */
/* eslint-disable no-else-return */

import { useDarkMode } from 'next-dark-mode'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { useMemo, useEffect } from 'react'
import * as THREE from 'three'

let EffectComposer
let RenderPass
let UnrealBloomPass

function Model({ dark }) {
  const SIZE = 12
  let jMatArray
  let midMatArray
  let lMatArray

  if (dark) {
    jMatArray = useMemo(() => [
      new THREE.MeshBasicMaterial({ color: 0x7f49de }),
      new THREE.MeshBasicMaterial({ color: 0x7f49de }),
      new THREE.MeshBasicMaterial({ color: 0x9064dd }),
      new THREE.MeshBasicMaterial({ color: 0x9064dd }),
      new THREE.MeshBasicMaterial({ color: 0x6421de }),
      new THREE.MeshBasicMaterial({ color: 0x6421de }),
    ])

    midMatArray = useMemo(() => [
      new THREE.MeshBasicMaterial({ color: 0x0e35e9 }),
      new THREE.MeshBasicMaterial({ color: 0x0e35e9 }),
      new THREE.MeshBasicMaterial({ color: 0x6c55f9 }),
      new THREE.MeshBasicMaterial({ color: 0x6c55f9 }),
      new THREE.MeshBasicMaterial({ color: 0x6421de }),
      new THREE.MeshBasicMaterial({ color: 0x6421de }),
    ])

    lMatArray = useMemo(() => [
      new THREE.MeshBasicMaterial({ color: 0x0e35e9 }),
      new THREE.MeshBasicMaterial({ color: 0x0e35e9 }),
      new THREE.MeshBasicMaterial({ color: 0x4b74f1 }),
      new THREE.MeshBasicMaterial({ color: 0x4b74f1 }),
      new THREE.MeshBasicMaterial({ color: 0xd53f8c }),
      new THREE.MeshBasicMaterial({ color: 0xd53f8c }),
    ])
  } else {
    jMatArray = useMemo(() => [
      new THREE.MeshBasicMaterial({ color: 0xed64a6 }),
      new THREE.MeshBasicMaterial({ color: 0xed64a6 }),
      new THREE.MeshBasicMaterial({ color: 0xf687b3 }),
      new THREE.MeshBasicMaterial({ color: 0xf687b3 }),
      new THREE.MeshBasicMaterial({ color: 0xd53f8c }),
      new THREE.MeshBasicMaterial({ color: 0xd53f8c }),
    ])

    midMatArray = useMemo(() => [
      new THREE.MeshBasicMaterial({ color: 0x667eea }),
      new THREE.MeshBasicMaterial({ color: 0x667eea }),
      new THREE.MeshBasicMaterial({ color: 0xb794f4 }),
      new THREE.MeshBasicMaterial({ color: 0xb794f4 }),
      new THREE.MeshBasicMaterial({ color: 0xd53f8c }),
      new THREE.MeshBasicMaterial({ color: 0xd53f8c }),
    ])

    lMatArray = useMemo(() => [
      new THREE.MeshBasicMaterial({ color: 0x667eea }),
      new THREE.MeshBasicMaterial({ color: 0x667eea }),
      new THREE.MeshBasicMaterial({ color: 0x7f9cf5 }),
      new THREE.MeshBasicMaterial({ color: 0x7f9cf5 }),
      new THREE.MeshBasicMaterial({ color: 0xd53f8c }),
      new THREE.MeshBasicMaterial({ color: 0xd53f8c }),
    ])
  }

  return (
    <object3D>
      <mesh position={[-SIZE * 2, -SIZE, 0]} material={jMatArray}>
        <boxBufferGeometry attach="geometry" args={[SIZE, SIZE, SIZE]} />
      </mesh>
      <mesh position={[-SIZE * 2, 0, 0]} material={jMatArray}>
        <boxBufferGeometry attach="geometry" args={[SIZE, SIZE, SIZE]} />
      </mesh>

      <mesh position={[-SIZE, -SIZE, 0]} material={jMatArray}>
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

function Bloom() {
  EffectComposer =
    require('three/examples/jsm/postprocessing/EffectComposer').EffectComposer
  UnrealBloomPass =
    require('three/examples/jsm/postprocessing/UnrealBloomPass').UnrealBloomPass
  RenderPass =
    require('three/examples/jsm/postprocessing/RenderPass').RenderPass

  const { gl, scene, camera, size } = useThree()

  const bloom = useMemo(() => {
    const renderScene = new RenderPass(scene, camera)
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(size.width, size.height),
      1.7,
      0.5,
      0
    )
    const composer = new EffectComposer(gl)
    composer.addPass(renderScene)
    composer.addPass(bloomPass)

    return composer
  }, [gl, scene, camera, size.width, size.height])

  useEffect(() => {
    bloom.setSize(size.width, size.height)
  }, [bloom, size])

  useFrame(() => {
    bloom.render()
  }, 1)
  return null
}

export default function Logo() {
  const { darkModeActive } = useDarkMode()

  if (typeof window !== 'undefined') {
    return (
      <div className="logo" style={{ width: '90px', height: '90px' }}>
        <Canvas
          colorManagement={false}
          dpr={window.devicePixelRatio}
          camera={{ position: [1000, 1000, 1000], near: 1, far: 5000 }}
          invalidateFrameloop
          orthographic
          linear
          noEvents
        >
          <Model dark={darkModeActive} />
          {darkModeActive && <Bloom />}
        </Canvas>
      </div>
    )
  } else {
    return <div style={{ width: '90px', height: '90px' }} />
  }
}
