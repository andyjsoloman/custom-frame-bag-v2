/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { ContactShadows, useHelper } from "@react-three/drei";
import { useRef, Suspense } from "react";
// import * as THREE from "three";
// import { Perf } from "r3f-perf";

import FullFrame from "./FullFrame";
import HalfFrame from "./HalfFrame";
import DoubleWhammy from "./DoubleWhammy";
import FullFrame2Zip from "./FullFrame2Zip";
import Loading from "./Loading";

export default function Experience({
  panel1Color,
  panel2Color,
  panel3Color,
  panel4Color,
  panel5Color,
  panel6Color,
  panel7Color,
  panel8Color,
  bagSize,
}) {
  const directionalLight = useRef();
  const directionalLight2 = useRef();

  // useHelper(directionalLight, THREE.DirectionalLightHelper, 1);
  // useHelper(directionalLight2, THREE.DirectionalLightHelper, 1);

  return (
    <>
      {/* <Perf position="top-left" /> */}
      <ContactShadows
        position={[0, -2.49, 0]}
        scale={10}
        resolution={512}
        opacity={0.5}
      />
      <directionalLight
        ref={directionalLight}
        castShadow
        shadow-mapSize={[1024, 1024]}
        position={[1, 6, 8]}
        intensity={2.5}
      />
      <directionalLight
        ref={directionalLight2}
        castShadow
        shadow-mapSize={[1024, 1024]}
        position={[1, 6, -8]}
        intensity={1.5}
      />
      <ambientLight intensity={0.5} />

      {bagSize === "Full Frame" && (
        <Suspense fallback={<Loading />}>
          <FullFrame
            scale={0.1}
            position={[-2.5, -1, 0]}
            panel1Color={panel1Color}
            panel2Color={panel2Color}
            panel3Color={panel3Color}
            panel4Color={panel4Color}
          />
        </Suspense>
      )}
      {bagSize === "Half Frame" && (
        <Suspense fallback={<Loading />}>
          <HalfFrame
            scale={0.1}
            position={[-2.5, -1, 0]}
            panel1Color={panel1Color}
            panel2Color={panel2Color}
            panel3Color={panel3Color}
            panel4Color={panel4Color}
          />
        </Suspense>
      )}
      {bagSize === "Double Whammy" && (
        <Suspense fallback={<Loading />}>
          <DoubleWhammy
            scale={0.1}
            position={[-2.5, -1, 0]}
            panel1Color={panel1Color}
            panel2Color={panel2Color}
            panel3Color={panel3Color}
            panel4Color={panel4Color}
            panel5Color={panel5Color}
            panel6Color={panel6Color}
            panel7Color={panel7Color}
            panel8Color={panel8Color}
          />
        </Suspense>
      )}
      {bagSize === "Full Frame 2 Zip" && (
        <Suspense fallback={<Loading />}>
          <FullFrame2Zip
            scale={0.1}
            position={[-2.5, -1, 0]}
            panel1Color={panel1Color}
            panel2Color={panel2Color}
            panel3Color={panel3Color}
            panel4Color={panel4Color}
            panel5Color={panel5Color}
            panel6Color={panel6Color}
          />
        </Suspense>
      )}
    </>
  );
}
