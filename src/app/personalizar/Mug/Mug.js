import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Mug(props) {
  const { nodes, materials } = useGLTF('/mug.gltf')
  return (
    <group {...props} dispose={null} scale={[40, 40,40]}>
      <mesh geometry={nodes.Object_2.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/mug.gltf')