/* eslint-disable react/prop-types */
import ButtonRow from "./ButtonRow";
import styled from "styled-components";

const ColourOptions = styled.div`
  overflow: scroll;
`;

const Title = styled.h2`
  margin-bottom: 16px;
`;

const RowTitle = styled.h3`
  display: inline;
`;

export default function PanelColours({
  panelColor,
  bagSize,
  setPanelColor,
  setCurrentStep,
  currentStep,
  panelColorNames,
}) {
  return (
    <>
      <Title>Panel Colours</Title>
      <ColourOptions>
        <RowTitle>Section 1: </RowTitle>
        <span>{panelColorNames[0]}</span>
        <ButtonRow handleSelectColor={setPanelColor} panelIndex={0} />
        <RowTitle>Section 2: </RowTitle>
        <span>{panelColorNames[1]}</span>
        <ButtonRow handleSelectColor={setPanelColor} panelIndex={1} />
        <RowTitle>Section 3: </RowTitle>
        <span>{panelColorNames[2]}</span>
        <ButtonRow handleSelectColor={setPanelColor} panelIndex={2} />
        <RowTitle>Section 4: </RowTitle>
        <span>{panelColorNames[3]}</span>
        <ButtonRow handleSelectColor={setPanelColor} panelIndex={3} />
        {bagSize === "Full Frame 2 Zip" && (
          <>
            <RowTitle>Section 5: </RowTitle>
            <span>{panelColorNames[4]}</span>
            <ButtonRow handleSelectColor={setPanelColor} panelIndex={4} />
            <RowTitle>Section 6</RowTitle>
            <span>{panelColorNames[5]}</span>
            <ButtonRow handleSelectColor={setPanelColor} panelIndex={5} />
          </>
        )}
        {bagSize === "Double Whammy" && (
          <>
            <RowTitle>Section 5: </RowTitle>
            <span>{panelColorNames[4]}</span>
            <ButtonRow handleSelectColor={setPanelColor} panelIndex={4} />
            <RowTitle>Section 6: </RowTitle>
            <span>{panelColorNames[5]}</span>
            <ButtonRow handleSelectColor={setPanelColor} panelIndex={5} />
            <RowTitle>Section 7: </RowTitle>
            <span>{panelColorNames[6]}</span>
            <ButtonRow handleSelectColor={setPanelColor} panelIndex={6} />
            <RowTitle>Section 8: </RowTitle>
            <span>{panelColorNames[7]}</span>
            <ButtonRow handleSelectColor={setPanelColor} panelIndex={7} />
          </>
        )}
      </ColourOptions>
      <button onClick={() => setCurrentStep(currentStep + 1)}>Next</button>
    </>
  );
}
