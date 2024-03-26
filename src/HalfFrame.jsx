/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function HalfFrame(props) {
  const { nodes } = useGLTF("./halfframe.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HalfFrameBag_1.geometry}
          material={
            new THREE.MeshStandardMaterial({
              color: props.panel1Color,
            })
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HalfFrameBag_2.geometry}
          material={
            new THREE.MeshStandardMaterial({ color: props.panel2Color })
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HalfFrameBag_3.geometry}
          material={
            new THREE.MeshStandardMaterial({ color: props.panel3Color })
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HalfFrameBag_4.geometry}
          material={new THREE.MeshStandardMaterial({ color: "black" })}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HalfFrameBag_5.geometry}
          material={
            new THREE.MeshStandardMaterial({ color: props.panel4Color })
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HalfFrameBag_6.geometry}
          material={new THREE.MeshStandardMaterial()}
        />
      </group>
    </group>
  );
}

useGLTF.preload("src/assets/halfframe.gltf");
