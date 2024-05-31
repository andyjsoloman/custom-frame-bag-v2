import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Experience from "./Experience";
import PanelColours from "./PanelColours";
import BagButtonContainer from "./BagButtonContainer";
import { defaultPanelColor, panelColorOptions } from "./constants";
import styled from "styled-components";
import useWindowDimensions from "./lib/useWindowDimensions";

const NavHeader = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #6eabb4;
  width: 100%;
  padding: 20px 0px;
  /* position: sticky;
  top: 0; */
`;

const HeaderLogo = styled.img`
  width: 100px;
  position: absolute;
  left: 20px;
  top: 12px;
  @media (max-width: 1100px) {
    width: 60px;
    left: 10px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  margin: 0;
`;

const BodyWrapper = styled.div`
  display: flex;

  justify-content: center;
  /* align-items: center; */

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const BagButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FormCard = styled.div`
  display: flex;

  padding: 20px;

  border-radius: 20px;
  /* border: 2px solid grey; */
  min-width: 550px;
  margin: 120px 20px;
  @media (max-width: 1100px) {
    min-width: 320px;
    margin-top: 0px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CanvasWrapper = styled.div`
  width: 460px;
  min-height: 600px;
  /* align-items: center; */
  margin: 20px;

  border-radius: 20px;
  & > div {
    height: 600px;
  }

  @media (max-width: 1100px) {
    max-width: 100vw;
    min-height: 400px;
    & > div {
      height: 500px;
    }
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80vw;
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

  const { width } = useWindowDimensions();

  return (
    <>
      <NavHeader>
        <HeaderLogo src="./logo.webp" alt="logo" />
        <HeaderWrapper>
          <Header>Frame Bag Colour Picker</Header>
        </HeaderWrapper>
      </NavHeader>

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
          <BagButtonWrapper>
            <BagButtonContainer
              handleSelectBag={setBagSize}
              bagSize={bagSize}
            />
          </BagButtonWrapper>
          <CanvasWrapper>
            <Canvas
              style={{ width: "100% !important", height: "500px !important" }}
              shadows
              orthographic
              camera={{
                fov: 100,
                zoom: Math.log(width) * 10,
                position: [0, 2, 8],
              }}
            >
              <OrbitControls />
              <Experience
                style={{ width: "100% !important", height: "500px !important" }}
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
