import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Bot = props => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/Officialbot.gltf')
  const { actions, names } = useAnimations(animations, group)

  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <group ref={group} {...props} dispose={null} position={[0, 4.5, 4]}>
      <group name='Scene'>
        <group name='Armature' rotation={[Math.PI / 2, 0, 0]} scale={0.02}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name='Alpha_Joints'
            geometry={nodes.Alpha_Joints.geometry}
            material={materials['Alpha_Joints_MAT.001']}
            skeleton={nodes.Alpha_Joints.skeleton}
          />
          <skinnedMesh
            name='Alpha_Surface'
            geometry={nodes.Alpha_Surface.geometry}
            material={materials['Alpha_Body_MAT.001']}
            skeleton={nodes.Alpha_Surface.skeleton}
          />
        </group>
      </group>
    </group>
  )
}

const BotCanvas = () => {
  return (
    <>
      <directionalLight position={[9, 5, 0]} shadow-mapSize={1024} castShadow />
      <Bot />
      <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
        <planeGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  )
}

export default BotCanvas

useGLTF.preload('/models/Officialbot.gltf')
