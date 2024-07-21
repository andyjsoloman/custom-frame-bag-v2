/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function FullFrame(props) {
  const { nodes } = useGLTF("./fullframe.gltf");

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrameBagv2_1.geometry}
          material={
            new THREE.MeshStandardMaterial({
              color: props.panel1Color,
            })
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrameBagv2_2.geometry}
          material={
            new THREE.MeshStandardMaterial({ color: props.panel2Color })
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrameBagv2_3.geometry}
          material={
            new THREE.MeshStandardMaterial({ color: props.panel3Color })
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrameBagv2_4.geometry}
          material={new THREE.MeshStandardMaterial({ color: "black" })}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrameBagv2_5.geometry}
          material={
            new THREE.MeshStandardMaterial({ color: props.panel4Color })
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrameBagv2_6.geometry}
          material={new THREE.MeshStandardMaterial({ color: "#2E2E2E" })}
        />
      </group>
    </group>
  );
}

useGLTF.preload("src/assets/bagv2.gltf");
