import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Experience from "./Experience";
import ButtonRow from "./ButtonRow";
import BagButtonContainer from "./BagButtonContainer";
import { defaultPanelColor } from "./constants";
import styled from "styled-components";

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid red;
`;

const CanvasWrapper = styled.div`
  border: 2px solid green;
  width: 1000px;
  /* display: flex;
  justify-content: center; */
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function App() {
  const [panel1Color, setPanel1Color] = useState(defaultPanelColor);
  const [panel2Color, setPanel2Color] = useState(defaultPanelColor);
  const [panel3Color, setPanel3Color] = useState(defaultPanelColor);
  const [panel4Color, setPanel4Color] = useState(defaultPanelColor);

  const [bagSize, setBagSize] = useState("Full Frame");

  console.log(bagSize);

  return (
    <>
      <FormBody>
        <h1>Frame Bag Customizer</h1>
        <label htmlFor="name">
          Name
          <input type="text" id="name" name="name" placeholder="Name" />
        </label>
        <label htmlFor="bike">
          Bike
          <input type="text" id="bike" name="bike" placeholder="Bike" />
        </label>
        <label htmlFor="bike-size">
          Bike Size
          <input
            type="text"
            id="bike-size"
            name="bike-size"
            placeholder="Bike Size"
          />
        </label>
        <label htmlFor="email">
          Email
          <input type="email" id="email" name="email" placeholder="Email" />
        </label>
        <h2>Panel Colours</h2>
        <h3>Section 1</h3>
        <ButtonRow handleSelectColor={setPanel1Color} />
        <h3>Section 2</h3>
        <ButtonRow handleSelectColor={setPanel2Color} />
        <h3>Section 3</h3>
        <ButtonRow handleSelectColor={setPanel3Color} />
        <h3>Section 4</h3>
        <ButtonRow handleSelectColor={setPanel4Color} />
        <h2>Entry</h2>
        <label htmlFor="entry">
          <input type="radio" name="entry" id="main-zipper" />1 Main Zipper
        </label>
        <label htmlFor="entry">
          <input type="radio" name="entry" id="main-zipper-div" />2 Main Zippers
          w/ Divider
        </label>
        <label htmlFor="entry">
          <input type="radio" name="entry" id="roll-top" />
          Roll Top
        </label>
        <h2>Pockets</h2>
        <label htmlFor="pockets">
          <input type="radio" name="pockets" id="nd-half" />
          Non-Drive Half
        </label>
        <label htmlFor="entry">
          <input type="radio" name="pockets" id="nd-full" />
          Non-Drive Full
        </label>
        <h2>Mounting</h2>
        <label htmlFor="mounting">
          <input type="radio" name="mounting" id="velcro" />
          Standard Velcro
        </label>
        <label htmlFor="mounting">
          <input type="radio" name="mounting" id="laceup" />
          Lace-Up
        </label>
        <label htmlFor="mounting">
          <input type="radio" name="mounting" id="bolton" />
          Bolt-On
        </label>
        <label htmlFor="mounting">
          <input type="radio" name="mounting" id="other" />
          Other{" "}
          <input type="text" id="other" name="other" placeholder="Details" />
        </label>
      </FormBody>
      <FlexContainer>
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
              bagSize={bagSize}
            />
          </Canvas>
        </CanvasWrapper>
        <BagButtonContainer handleSelectBag={setBagSize} />
      </FlexContainer>
    </>
  );
}
