/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { ContactShadows } from "@react-three/drei";
import { useRef, useEffect, Suspense } from "react";
// import * as THREE from "three";
// import { Perf } from "r3f-perf";
import * as lil from "lil-gui";

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
  const ambientLight = useRef();

  //LIGHTING GUI/HELPERS
  // useEffect(() => {
  //   const gui = new lil.GUI();

  //   // Add controls for directional lights
  //   gui
  //     .add(directionalLight.current, "intensity", 0, 5, 0.1)
  //     .name("Dir Light 1");
  //   gui
  //     .add(directionalLight2.current, "intensity", 0, 5, 0.1)
  //     .name("Dir Light 2");

  //   // Add control for ambient light
  //   gui.add(ambientLight.current, "intensity", 0, 2, 0.1).name("Ambient Light");

  //   return () => {
  //     gui.destroy(); // Cleanup GUI on unmount
  //   };
  // }, []);
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
      <ambientLight ref={ambientLight} intensity={0.5} />

      {bagSize === "Full Frame" && (
        <Suspense fallback={<Loading />}>
          <FullFrame
            scale={0.1}
            rotation={[0.07, -0.75, 0]}
            position={[-2, -1, 0]}
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
            rotation={[0.07, -0.75, 0]}
            position={[-2, -1, 0]}
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
            rotation={[0.07, -0.75, 0]}
            position={[-2, -1, 0]}
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
            rotation={[0.07, -0.75, 0]}
            position={[-2, -1, 0]}
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
