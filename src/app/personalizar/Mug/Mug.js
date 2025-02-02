import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader, RepeatWrapping } from 'three';
import { useGLTF } from '@react-three/drei';

export function Mug({ imageTexture }) {
  const { nodes, materials } = useGLTF('/mug.gltf');

  // Cargar textura de la imagen o usar una por defecto
  const texture = useLoader(TextureLoader, imageTexture || '/default.png');

  // Ajustar la textura para cubrir exactamente el área deseada
  texture.flipY = false; // Mantiene la imagen en la orientación correcta
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;

  // Ajustar la imagen al 100% del ancho y 80% del alto del mug
  texture.repeat.set(1, 0.8); 
  texture.offset.set(0, 0.1); // Centrar verticalmente

  // Colocar la imagen en la parte opuesta a la manija
  texture.center.set(0.5, 0.5);
  texture.rotation = Math.PI; // Asegurar la orientación correcta

  return (
    <group dispose={null} scale={[40, 40, 40]}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials['Material.001']} // Verifica que este es el material correcto
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial 
          map={texture} 
          transparent={true} 
          roughness={0.5}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('/mug.gltf');
