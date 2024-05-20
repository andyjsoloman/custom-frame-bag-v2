import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Experience from "./Experience";
import PanelColours from "./PanelColours";
import BagButtonContainer from "./BagButtonContainer";
import { defaultPanelColor, panelColorOptions } from "./constants";
import styled from "styled-components";

const NavHeader = styled.nav`
  display: flex;
  justify-content: center;

  margin: 40px;
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
  background-color: #f0f8f9;
  padding: 20px;
  height: 500px;

  /* overflow: scroll; */
  border-radius: 20px;
  border: 2px solid grey;
  min-width: 600px;
  margin: 20px 40px 20px 20px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CanvasWrapper = styled.div`
  border: 2px solid grey;
  width: 600px;
  min-height: 500px;
  align-items: center;
  margin: 20px 40px 20px 20px;
  background-color: #f0f8f9;
  border-radius: 20px;

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
  const [panelColorNames, setPanelColorNames] = useState(
    Array.from({ length: panelColorOptions.length }, () => null)
  );

  const setPanelColor = (index, color, label) => {
    setPanelColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = color;

      return newColors;
    });
    setPanelColorNames((prevColorNames) => {
      const newColorNames = [...prevColorNames];
      newColorNames[index] = label;

      return newColorNames;
    });
  };

  const [bagSize, setBagSize] = useState("Full Frame");

  return (
    <>
      <NavHeader>
        <h1>Frame Bag Customizer</h1>
      </NavHeader>
      <BagButtonWrapper>
        <BagButtonContainer handleSelectBag={setBagSize} bagSize={bagSize} />
      </BagButtonWrapper>
      <BodyWrapper>
        <FormCard>
          <FormContainer>
            <PanelColours
              bagSize={bagSize}
              setPanelColor={setPanelColor}
              panelColor={panelColors}
              panelColorNames={panelColorNames}
            />
          </FormContainer>
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
