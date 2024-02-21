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

const NavHeader = styled.nav`
  display: flex;
  justify-content: center;
  border: 2px solid coral;
  margin: 20px 40px;
`;

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BagButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FormCard = styled.div`
  display: flex;
  /* align-items: center; */
  background-color: #f4f2e6;
  padding: 20px;
  max-height: 60vh;

  flex-basis: 500px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  border: 2px solid red;
`;

const CanvasWrapper = styled.div`
  border: 2px solid green;
  width: 600px;
  min-height: 500px;
  align-items: center;
  margin: 20px 40px;

  /* display: flex;
  justify-content: center; */
`;

const FlexContainer = styled.div`
  display: flex;
  /* justify-content: space-around; */
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
  const [currentStep, setCurrentStep] = useState(1);

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
    console.log({ bagSize, inputs, panelColors });
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PanelColours
            bagSize={bagSize}
            setPanelColor={setPanelColor}
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
          />
        );
      case 2:
        return (
          <PocketsMounting
            inputs={inputs}
            handleChange={handleChange}
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
          />
        );
      case 3:
        return (
          <OrderInfo
            inputs={inputs}
            handleChange={handleChange}
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <NavHeader>
        <h1>Frame Bag Customizer</h1>
      </NavHeader>
      <BagButtonWrapper>
        <BagButtonContainer handleSelectBag={setBagSize} />
      </BagButtonWrapper>
      <BodyWrapper>
        <FormCard>
          <FormContainer onSubmit={handleSubmit}>{renderStep()}</FormContainer>
        </FormCard>
        <FlexContainer>
          <CanvasWrapper>
            <Canvas
              shadows
              orthographic
              camera={{ fov: 100, zoom: 80, position: [0, 2, 8] }}
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
        </FlexContainer>
      </BodyWrapper>
    </>
  );
}
