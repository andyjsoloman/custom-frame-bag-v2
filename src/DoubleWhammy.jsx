/* eslint-disable react/no-unknown-property */
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function DoubleWhammy(props) {
  const { nodes } = useGLTF("../src/assets/doublewhammy.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DoubleWhammy_1.geometry}
          material={
            new THREE.MeshStandardMaterial({
              color: props.panel1Color,
            })
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DoubleWhammy_2.geometry}
          material={
            new THREE.MeshStandardMaterial({ color: props.panel2Color })
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DoubleWhammy_3.geometry}
          material={
            new THREE.MeshStandardMaterial({ color: props.panel3Color })
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DoubleWhammy_4.geometry}
          material={new THREE.MeshStandardMaterial({ color: "black" })}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DoubleWhammy_5.geometry}
          material={
            new THREE.MeshStandardMaterial({ color: props.panel4Color })
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DoubleWhammy_6.geometry}
          material={new THREE.MeshStandardMaterial()}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DoubleWhammy_7.geometry}
          material={
            new THREE.MeshStandardMaterial({ color: props.panel8Color })
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DoubleWhammy_8.geometry}
          material={
            new THREE.MeshStandardMaterial({ color: props.panel5Color })
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DoubleWhammy_9.geometry}
          material={
            new THREE.MeshStandardMaterial({ color: props.panel7Color })
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DoubleWhammy_10.geometry}
          material={
            new THREE.MeshStandardMaterial({ color: props.panel6Color })
          }
        />
      </group>
    </group>
  );
}

useGLTF.preload("src/assets/doublewhammy.gltf");
