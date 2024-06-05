/* eslint-disable react/prop-types */
import ButtonRow from "./ButtonRow";
import styled from "styled-components";
import { useState, useEffect, useMemo } from "react";
import { CaretCircleDown } from "@phosphor-icons/react";

const ColourOptions = styled.div`
  /* overflow: scroll; */
`;

const Title = styled.h2`
  margin-bottom: 16px;
`;

const RowTitle = styled.div`
  display: flex;
  align-items: center;
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
        <RowTitle>
          <h3>Panel 1:</h3> <span>{panelColorNames[0]}</span>{" "}
          <CaretCircleDown size={32} />
        </RowTitle>

        <ButtonRow handleSelectColor={setPanelColor} panelIndex={0} />
        <RowTitle>
          <h3>Panel 2:</h3> <span>{panelColorNames[1]}</span>
          <CaretCircleDown size={32} />
        </RowTitle>

        <ButtonRow handleSelectColor={setPanelColor} panelIndex={1} />
        <RowTitle>
          <h3>Panel 3:</h3> <span>{panelColorNames[2]}</span>
          <CaretCircleDown size={32} />
        </RowTitle>

        <ButtonRow handleSelectColor={setPanelColor} panelIndex={2} />
        <RowTitle>
          <h3>Panel 4:</h3> <span>{panelColorNames[3]}</span>
          <CaretCircleDown size={32} />
        </RowTitle>

        <ButtonRow handleSelectColor={setPanelColor} panelIndex={3} />
        {bagSize === "Full Frame 2 Zip" && (
          <>
            <RowTitle>
              <h3>Panel 5:</h3> <span>{panelColorNames[4]}</span>
              <CaretCircleDown size={32} />
            </RowTitle>

            <ButtonRow handleSelectColor={setPanelColor} panelIndex={4} />
            <RowTitle>
              <h3>Panel 6: </h3>
              <span>{panelColorNames[5]}</span>
              <CaretCircleDown size={32} />
            </RowTitle>

            <ButtonRow handleSelectColor={setPanelColor} panelIndex={5} />
          </>
        )}
        {bagSize === "Double Whammy" && (
          <>
            <RowTitle>
              <h3>Panel 5:</h3> <span>{panelColorNames[4]}</span>
              <CaretCircleDown size={32} />
            </RowTitle>

            <ButtonRow handleSelectColor={setPanelColor} panelIndex={4} />
            <RowTitle>
              <h3>Panel 6:</h3> <span>{panelColorNames[5]}</span>
              <CaretCircleDown size={32} />
            </RowTitle>

            <ButtonRow handleSelectColor={setPanelColor} panelIndex={5} />
            <RowTitle>
              <h3>Panel 7:</h3> <span>{panelColorNames[6]}</span>
              <CaretCircleDown size={32} />
            </RowTitle>

            <ButtonRow handleSelectColor={setPanelColor} panelIndex={6} />
            <RowTitle>
              <h3>Panel 8:</h3> <span>{panelColorNames[7]}</span>
              <CaretCircleDown size={32} />
            </RowTitle>

            <ButtonRow handleSelectColor={setPanelColor} panelIndex={7} />
          </>
        )}
      </ColourOptions>
    </>
  );
}
