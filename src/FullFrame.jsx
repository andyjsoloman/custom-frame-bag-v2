import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const panelColors = [
  { label: "Gold", color: "#FDB516" },
  { label: "Fuschia", color: "#B6015A" },
  { label: "Lilac", color: "#90458D" },
  { label: "Teal", color: "#02838F" },
  { label: "Blue", color: "#085ECA" },
  { label: "Forest Green", color: "#112520" },
  { label: "Brick Red", color: "#8F1420" },
  { label: "Coyote", color: "#805C37" },
  { label: "White", color: "#EBEBEB" },
  { label: "Grey", color: "#413F42" },
  { label: "Black", color: "#252829" },
];

export function FullFrame(props) {
  const { nodes, materials } = useGLTF("src/assets/bagv2.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrameBagv2_1.geometry}
          material={new THREE.MeshStandardMaterial({ color: "#FDB516" })}
          color={"coral"}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrameBagv2_2.geometry}
          material={new THREE.MeshStandardMaterial({ color: "#90458D" })}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrameBagv2_3.geometry}
          material={new THREE.MeshStandardMaterial({ color: "#B6015A" })}
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
          material={new THREE.MeshStandardMaterial({ color: "#112520" })}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrameBagv2_6.geometry}
          material={new THREE.MeshStandardMaterial()}
        />
      </group>
    </group>
  );
}

useGLTF.preload("src/assets/bagv2.gltf");
