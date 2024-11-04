/* eslint-disable react/prop-types */
import ButtonRow from "./ButtonRow";
import styled, { css } from "styled-components";
import { useState, useEffect, useMemo, useRef } from "react";
import { CaretCircleDown } from "@phosphor-icons/react";

const ColourOptions = styled.div`
  /* overflow: scroll; */
`;

const Title = styled.h2`
  margin-bottom: 16px;
`;

const RowTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 12px;

  border-bottom: 1px solid grey;
  white-space: nowrap;
`;

const CaretWrapper = styled.div`
  display: inline-flex;
  min-width: 32px;
  color: #4d7075;
  transform: rotate(-90deg);
  transition: transform 0.3s;
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: rotate(0deg);
    `}
`;

const PanelColorName = styled.span`
  display: flex;
  white-space: nowrap;
  justify-content: center;
`;

const PanelColorBlock = styled.div`
  margin: auto;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background-color: ${({ $backgroundColor }) => $backgroundColor || "#f0f8f9"};
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export default function PanelColours({
  bagSize,
  setPanelColor,
  panelColorNames,
  panelColors,
}) {
  const [numPanels, setNumPanels] = useState(4);
  const [openPanels, setOpenPanels] = useState([]);
  const colorButtonRefs = useRef([]);

  const panelCount = useMemo(
    () => ({ "Full Frame 2 Zip": 6, "Double Whammy": 8 }),
    []
  );

  useEffect(() => {
    // Focus on the first ColorButton when a panel is expanded
    openPanels.forEach((index) => {
      if (colorButtonRefs.current[index]) {
        colorButtonRefs.current[index].focus();
      }
    });
  }, [openPanels]); // Run effect whenever openPanels changes

  useEffect(() => {
    setNumPanels(panelCount[bagSize] || 4);
  }, [bagSize, panelCount]);

  const togglePanel = (index) => {
    setOpenPanels((prevOpenPanels) =>
      prevOpenPanels.includes(index)
        ? prevOpenPanels.filter((i) => i !== index)
        : [...prevOpenPanels, index]
    );
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Enter") {
      togglePanel(index);
    }
  };

  const renderPanel = (index) => (
    <div key={index}>
      <RowTitle
        onClick={() => togglePanel(index)}
        onKeyDown={(event) => handleKeyDown(event, index)}
        tabIndex={0}
        role="menu"
        aria-haspopup="true"
        aria-expanded={openPanels.includes(index)}
        aria-controls={`panel-${index + 1}-menu`}
      >
        <h3>Panel {index + 1}:</h3>

        <PanelColorName>{panelColorNames[index]}</PanelColorName>
        <IconWrapper>
          <PanelColorBlock $backgroundColor={panelColors[index]} />
          <CaretWrapper $isOpen={openPanels.includes(index)}>
            <CaretCircleDown size={36} color="#4d7075" />
          </CaretWrapper>
        </IconWrapper>
      </RowTitle>
      {openPanels.includes(index) && (
        <ButtonRow
          id={`panel-${index + 1}-menu`}
          handleSelectColor={setPanelColor}
          panelIndex={index}
          isOpen={openPanels.includes(index)}
        />
      )}
    </div>
  );

  return (
    <>
      <Title>Panel Colours ({numPanels})</Title>
      <ColourOptions>
        {[...Array(numPanels)].map((_, i) => renderPanel(i))}
      </ColourOptions>
    </>
  );
}
