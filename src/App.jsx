import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Experience from "./Experience";
import PanelColours from "./PanelColours";
import BagButtonContainer from "./BagButtonContainer";
import { defaultPanelColor, panelColorOptions } from "./constants";
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
  const [panelColors, setPanelColors] = useState(
    Array.from({ length: panelColorOptions.length }, () => defaultPanelColor)
  );

  const setPanelColor = (index, color) => {
    setPanelColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = color;

      return newColors;
    });
  };

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
        <PanelColours bagSize={bagSize} setPanelColor={setPanelColor} />
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
              panel1Color={panelColors[0]}
              panel2Color={panelColors[1]}
              panel3Color={panelColors[2]}
              panel4Color={panelColors[3]}
              panel5Color={panelColors[4]}
              panel6Color={panelColors[5]}
              panel7Color={panelColors[6]}
              panel8Color={panelColors[7]}
              bagSize={bagSize}
            />
          </Canvas>
        </CanvasWrapper>
        <BagButtonContainer handleSelectBag={setBagSize} />
      </FlexContainer>
    </>
  );
}
