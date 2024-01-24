'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Holoplanet = () => {
  const holoplanetRef = useRef()
  const holoplanet = useGLTF('/models/Holoplanet.gltf')

  useFrame(() => {
    if (holoplanetRef.current) {
      holoplanetRef.current.rotation.x -= 0.001
    }
  })

  return <primitive ref={holoplanetRef} object={holoplanet.scene} scale={2.5} position={[0, -2.5, -1]} />
}

const HoloplanetCanvas = () => {
  return (
    <>
      <Holoplanet />
    </>
  )
}

export default HoloplanetCanvas
