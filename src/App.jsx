import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Experience from "./Experience";
import PanelColours from "./PanelColours";
import BagButtonContainer from "./BagButtonContainer";
import { defaultPanelColor } from "./constants";
import styled from "styled-components";
import useForm from "./lib/useForm";
import OrderInfo from "./OrderInfo";
import PocketsMounting from "./PocketsMounting";

const FormContainer = styled.form`
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
    console.log({ bagSize, inputs, panel1: panel1Color, panel5: panel5Color });
  }

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <h1>Frame Bag Customizer</h1>
        <PanelColours
          bagSize={bagSize}
          setPanel1Color={setPanel1Color}
          setPanel2Color={setPanel2Color}
          setPanel3Color={setPanel3Color}
          setPanel4Color={setPanel4Color}
          setPanel5Color={setPanel5Color}
          setPanel6Color={setPanel6Color}
          setPanel7Color={setPanel7Color}
          setPanel8Color={setPanel8Color}
        />
        <PocketsMounting inputs={inputs} handleChange={handleChange} />
        <OrderInfo inputs={inputs} handleChange={handleChange} />

        <button>Submit</button>
        <button type="button" onClick={clearForm}>
          Clear Form
        </button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </FormContainer>
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
