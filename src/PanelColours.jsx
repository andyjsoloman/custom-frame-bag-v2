/* eslint-disable react/prop-types */
import ButtonRow from "./ButtonRow";
import styled from "styled-components";
import { useState, useEffect, useMemo } from "react";

const ColourOptions = styled.div`
  /* overflow: scroll; */
`;

const Title = styled.h2`
  margin-bottom: 16px;
`;

const RowTitle = styled.h3`
  display: inline;
`;

export default function PanelColours({
  bagSize,
  setPanelColor,

  panelColorNames,
}) {
  const [numPanels, setNumPanels] = useState(4);

  const panelCount = useMemo(
    () => ({ "Full Frame 2 Zip": 6, "Double Whammy": 8 }),
    []
  );

  useEffect(() => {
    setNumPanels(panelCount[bagSize] || 4);
  }, [bagSize, panelCount]);
  return (
    <>
      <Title>Panel Colours ({numPanels})</Title>
      <ColourOptions>
        <RowTitle>Panel 1: </RowTitle>
        <span>{panelColorNames[0]}</span>
        <ButtonRow handleSelectColor={setPanelColor} panelIndex={0} />
        <RowTitle>Panel 2: </RowTitle>
        <span>{panelColorNames[1]}</span>
        <ButtonRow handleSelectColor={setPanelColor} panelIndex={1} />
        <RowTitle>Panel 3: </RowTitle>
        <span>{panelColorNames[2]}</span>
        <ButtonRow handleSelectColor={setPanelColor} panelIndex={2} />
        <RowTitle>Panel 4: </RowTitle>
        <span>{panelColorNames[3]}</span>
        <ButtonRow handleSelectColor={setPanelColor} panelIndex={3} />
        {bagSize === "Full Frame 2 Zip" && (
          <>
            <RowTitle>Panel 5: </RowTitle>
            <span>{panelColorNames[4]}</span>
            <ButtonRow handleSelectColor={setPanelColor} panelIndex={4} />
            <RowTitle>Panel 6</RowTitle>
            <span>{panelColorNames[5]}</span>
            <ButtonRow handleSelectColor={setPanelColor} panelIndex={5} />
          </>
        )}
        {bagSize === "Double Whammy" && (
          <>
            <RowTitle>Panel 5: </RowTitle>
            <span>{panelColorNames[4]}</span>
            <ButtonRow handleSelectColor={setPanelColor} panelIndex={4} />
            <RowTitle>Panel 6: </RowTitle>
            <span>{panelColorNames[5]}</span>
            <ButtonRow handleSelectColor={setPanelColor} panelIndex={5} />
            <RowTitle>Panel 7: </RowTitle>
            <span>{panelColorNames[6]}</span>
            <ButtonRow handleSelectColor={setPanelColor} panelIndex={6} />
            <RowTitle>Panel 8: </RowTitle>
            <span>{panelColorNames[7]}</span>
            <ButtonRow handleSelectColor={setPanelColor} panelIndex={7} />
          </>
        )}
      </ColourOptions>
    </>
  );
}
