import dynamic from 'next/dynamic'
import { useDarkMode } from 'next-dark-mode'
import { Canvas, useThree, useFrame } from 'react-three-fiber'
import { Suspense, useState, useRef, useMemo, useEffect } from "react"
import * as THREE from 'three'

let EffectComposer, RenderPass, ShaderPass, UnrealBloomPass, FXAAShader

function Model({ dark }) {
  const SIZE = 12
  let jMatArray, midMatArray, lMatArray

  if (dark) {
    jMatArray = useMemo(() => [
      new THREE.MeshBasicMaterial({color:0x7F49DE}),
      new THREE.MeshBasicMaterial({color:0x7F49DE}),
      new THREE.MeshBasicMaterial({color:0x9064DD}),
      new THREE.MeshBasicMaterial({color:0x9064DD}),
      new THREE.MeshBasicMaterial({color:0x6421DE}),
      new THREE.MeshBasicMaterial({color:0x6421DE})
    ])

    midMatArray = useMemo(() => [
      new THREE.MeshBasicMaterial({color:0x0E35E9}),
      new THREE.MeshBasicMaterial({color:0x0E35E9}),
      new THREE.MeshBasicMaterial({color:0x6C55F9}),
      new THREE.MeshBasicMaterial({color:0x6C55F9}),
      new THREE.MeshBasicMaterial({color:0x6421DE}),
      new THREE.MeshBasicMaterial({color:0x6421DE})
    ])

    lMatArray = useMemo(() => [
     new THREE.MeshBasicMaterial({color:0x0E35E9}),
     new THREE.MeshBasicMaterial({color:0x0E35E9}),
     new THREE.MeshBasicMaterial({color:0x4B74F1}),
     new THREE.MeshBasicMaterial({color:0x4B74F1}),
     new THREE.MeshBasicMaterial({color:0xD53F8C}),
     new THREE.MeshBasicMaterial({color:0xD53F8C})
   ])

  } else {
    jMatArray = useMemo(() => [
      new THREE.MeshBasicMaterial({color:0xED64A6}),
      new THREE.MeshBasicMaterial({color:0xED64A6}),
      new THREE.MeshBasicMaterial({color:0xF687B3}),
      new THREE.MeshBasicMaterial({color:0xF687B3}),
      new THREE.MeshBasicMaterial({color:0xD53F8C}),
      new THREE.MeshBasicMaterial({color:0xD53F8C})
    ])

    midMatArray = useMemo(() => [
      new THREE.MeshBasicMaterial({color:0x667EEA}),
      new THREE.MeshBasicMaterial({color:0x667EEA}),
      new THREE.MeshBasicMaterial({color:0xB794F4}),
      new THREE.MeshBasicMaterial({color:0xB794F4}),
      new THREE.MeshBasicMaterial({color:0xD53F8C}),
      new THREE.MeshBasicMaterial({color:0xD53F8C})
    ])

    lMatArray = useMemo(() => [
     new THREE.MeshBasicMaterial({color:0x667EEA}),
     new THREE.MeshBasicMaterial({color:0x667EEA}),
     new THREE.MeshBasicMaterial({color:0x7F9CF5}),
     new THREE.MeshBasicMaterial({color:0x7F9CF5}),
     new THREE.MeshBasicMaterial({color:0xD53F8C}),
     new THREE.MeshBasicMaterial({color:0xD53F8C})
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

function Bloom() {
  EffectComposer = require('three/examples/jsm/postprocessing/EffectComposer').EffectComposer
  UnrealBloomPass = require('three/examples/jsm/postprocessing/UnrealBloomPass').UnrealBloomPass
  RenderPass = require('three/examples/jsm/postprocessing/RenderPass').RenderPass
  ShaderPass = require('three/examples/jsm/postprocessing/ShaderPass.js').ShaderPass

  const { gl, scene, camera, size } = useThree()

  const bloom  = useMemo(() => {
    var renderScene = new RenderPass( scene, camera )
    var bloomPass = new UnrealBloomPass( new THREE.Vector2( size.width, size.height ), 1.7, 0.5, 0 )
    var composer = new EffectComposer( gl )
    composer.addPass( renderScene )
    composer.addPass( bloomPass )

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
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (typeof window !== 'undefined') {
    return (
      <div
        className= {`logo ${loaded ? "loaded" : ""}`}
        style = {{width: '90px', height: '90px'}}>
        <Canvas
          invalidateFrameloop={true}
          pixelRatio={window.devicePixelRatio > 1 ? 2 : 1}
          orthographic={true}
          camera={{ position: [1000, 1000, 1000], near: 1, far: 5000 }}
          noEvents={true}
        >
          <Model dark={darkModeActive} />
          { darkModeActive && <Bloom /> }
        </Canvas>
      </div>
    )
  } else {
    return (
      <div style={{width: '90px', height: '90px'}}></div>
    )
  }
}
