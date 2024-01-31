import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Experience from "./Experience";
import ButtonRow from "./ButtonRow";
import { defaultPanelColor } from "./constants";

export default function App() {
  const [panel1Color, setPanel1Color] = useState(defaultPanelColor);
  const [panel2Color, setPanel2Color] = useState(defaultPanelColor);
  const [panel3Color, setPanel3Color] = useState(defaultPanelColor);
  const [panel4Color, setPanel4Color] = useState(defaultPanelColor);

  return (
    <>
      <h1>Frame Bag Customizer</h1>
      <ButtonRow handleSelectColor={setPanel1Color} />
      <ButtonRow handleSelectColor={setPanel2Color} />
      <ButtonRow handleSelectColor={setPanel3Color} />
      <ButtonRow handleSelectColor={setPanel4Color} />
      <Canvas
        shadows
        orthographic
        camera={{ fov: 100, zoom: 100, position: [0, 2, 8] }}
      >
        <OrbitControls />
        <Experience
          panel1Color={panel1Color}
          panel2Color={panel2Color}
          panel3Color={panel3Color}
          panel4Color={panel4Color}
        />
      </Canvas>
    </>
  );
}
