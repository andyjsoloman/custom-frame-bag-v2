import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function FullFrame(props) {
  const { nodes, materials } = useGLTF("src/assets/bagv2.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrameBagv2_1.geometry}
          material={materials["Aluminum_-_Anodized_Glossy_(Blue)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrameBagv2_2.geometry}
          material={materials["Aluminum_-_Anodized_Glossy_(Red)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrameBagv2_3.geometry}
          material={materials["Aluminum_-_Anodized_Glossy_(Grey)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrameBagv2_4.geometry}
          material={materials["Aluminum_-_Satin"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrameBagv2_5.geometry}
          material={materials["Brass_-_Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrameBagv2_6.geometry}
          material={materials["Iron_-_Polished"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("src/assets/bagv2.gltf");
