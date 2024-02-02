import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Experience from "./Experience";
import ButtonRow from "./ButtonRow";
import { defaultPanelColor } from "./constants";
import styled from "styled-components";

export default function App() {
  const [panel1Color, setPanel1Color] = useState(defaultPanelColor);
  const [panel2Color, setPanel2Color] = useState(defaultPanelColor);
  const [panel3Color, setPanel3Color] = useState(defaultPanelColor);
  const [panel4Color, setPanel4Color] = useState(defaultPanelColor);

  const FormBody = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid red;
  `;

  const CanvasWrapper = styled.div`
    border: 2px solid green;
    width: 1000px;
  `;

  return (
    <>
      <FormBody>
        <h1>Frame Bag Customizer</h1>
        <ButtonRow handleSelectColor={setPanel1Color} />
        <ButtonRow handleSelectColor={setPanel2Color} />
        <ButtonRow handleSelectColor={setPanel3Color} />
        <ButtonRow handleSelectColor={setPanel4Color} />
      </FormBody>
      <CanvasWrapper>
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
      </CanvasWrapper>
    </>
  );
}
