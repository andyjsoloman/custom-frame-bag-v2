import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Experience from "./Experience";
import ButtonRow from "./ButtonRow";
import BagButtonContainer from "./BagButtonContainer";
import { defaultPanelColor } from "./constants";
import styled from "styled-components";
import useForm from "./lib/useForm";

const FormBody = styled.form`
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
  const [panel5Color, setPanel5Color] = useState(defaultPanelColor);
  const [panel6Color, setPanel6Color] = useState(defaultPanelColor);
  const [panel7Color, setPanel7Color] = useState(defaultPanelColor);
  const [panel8Color, setPanel8Color] = useState(defaultPanelColor);

  const [bagSize, setBagSize] = useState("Full Frame");

  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: "Name",
    bike: "Bike",
    bikeSize: "Bike Size",
    email: "Email",
    entry: "",
    pockets: "",
    mounting: "",
    mountingDetails: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ bagSize, inputs, panel1: panel1Color });
  }

  return (
    <>
      <FormBody onSubmit={handleSubmit}>
        <h1>Frame Bag Customizer</h1>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="bike">
          Bike
          <input
            type="text"
            id="bike"
            name="bike"
            placeholder="Bike"
            value={inputs.bike}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="bikeSize">
          Bike Size
          <input
            type="text"
            id="bikeSize"
            name="bikeSize"
            placeholder="Bike Size"
            value={inputs.bikeSize}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={inputs.email}
            onChange={handleChange}
          />
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
        {bagSize === "Full Frame 2 Zip" && (
          <>
            <h3>Section 5</h3>
            <ButtonRow handleSelectColor={setPanel5Color} />
            <h3>Section 6</h3>
            <ButtonRow handleSelectColor={setPanel6Color} />
          </>
        )}
        {bagSize === "Double Whammy" && (
          <>
            <h3>Section 5</h3>
            <ButtonRow handleSelectColor={setPanel5Color} />
            <h3>Section 6</h3>
            <ButtonRow handleSelectColor={setPanel6Color} />
            <h3>Section 7</h3>
            <ButtonRow handleSelectColor={setPanel7Color} />
            <h3>Section 8</h3>
            <ButtonRow handleSelectColor={setPanel8Color} />
          </>
        )}
        <h2>Entry</h2>
        <label htmlFor="entry">
          <input
            type="radio"
            name="entry"
            id="main-zipper"
            value="One Main Zipper"
            onChange={handleChange}
          />
          1 Main Zipper
        </label>
        <label htmlFor="entry">
          <input
            type="radio"
            name="entry"
            id="main-zipper-div"
            value="Two Main Zippers w/Divider"
            onChange={handleChange}
          />
          2 Main Zippers w/ Divider
        </label>
        <label htmlFor="entry">
          <input
            type="radio"
            name="entry"
            id="roll-top"
            value="Roll Top"
            onChange={handleChange}
          />
          Roll Top
        </label>
        <h2>Pockets</h2>
        <label htmlFor="pockets">
          <input
            type="radio"
            name="pockets"
            id="nd-half"
            value="Non Drive Half"
            onChange={handleChange}
          />
          Non-Drive Half
        </label>
        <label htmlFor="entry">
          <input
            type="radio"
            name="pockets"
            id="nd-full"
            value="Non Drive Full"
            onChange={handleChange}
          />
          Non-Drive Full
        </label>
        <h2>Mounting</h2>
        <label htmlFor="mounting">
          <input
            type="radio"
            name="mounting"
            id="velcro"
            value="Standard Velcro"
            onChange={handleChange}
          />
          Standard Velcro
        </label>
        <label htmlFor="mounting">
          <input
            type="radio"
            name="mounting"
            id="laceup"
            value="Lace-Up"
            onChange={handleChange}
          />
          Lace-Up
        </label>
        <label htmlFor="mounting">
          <input
            type="radio"
            name="mounting"
            id="bolton"
            value="Bolt-On"
            onChange={handleChange}
          />
          Bolt-On
        </label>
        <label htmlFor="mounting">
          <input
            type="radio"
            name="mounting"
            id="other"
            value="Other"
            onChange={handleChange}
          />
          Other
          {inputs.mounting === "Other" && (
            <input
              type="text"
              id="otherDetails"
              name="mountingDetails"
              placeholder="Details"
              value={inputs.mountingDetails}
              onChange={handleChange}
            />
          )}
        </label>
        <button>Submit</button>
        <button type="button" onClick={clearForm}>
          Clear Form
        </button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
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
              panel5Color={panel5Color}
              panel6Color={panel6Color}
              panel7Color={panel7Color}
              panel8Color={panel8Color}
              bagSize={bagSize}
            />
          </Canvas>
        </CanvasWrapper>
        <BagButtonContainer handleSelectBag={setBagSize} />
      </FlexContainer>
    </>
  );
}
