/* eslint-disable react/prop-types */
import { useState } from "react";
import { panelColorOptions } from "./constants";
import ColorButton from "./ColorButton";
import styled from "styled-components";

import ColorSelect from "./ColorSelect";

const ButtonDiv = styled.div`
  margin: 12px 20px 24px 20px;
  /* display: none;

  @media (min-width: 1100px) {
    display: revert;
  }
`;

const SelectWrapper = styled.div`
  @media (min-width: 1100px) {
    display: none;
  } */
`;

const ColorOption = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;

  @media (min-width: 1100px) {
    display: inline;
    padding: 0px;
  }
`;

const ColorTitle = styled.span`
  @media (min-width: 1100px) {
    display: none;
  }
`;

export default function ButtonRow({ handleSelectColor, panelIndex }) {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = (panelIndex, color, label) => {
    setSelectedColor(color);
    handleSelectColor(panelIndex, color, label);
  };

  const handleSelect = (selectedOption) => {
    handleSelectColor(panelIndex, selectedOption.color, selectedOption.label);
  };

  return (
    <>
      <ButtonDiv>
        {panelColorOptions.map((button, index) => (
          <ColorOption
            key={index}
            onClick={() =>
              handleButtonClick(panelIndex, button.color, button.label)
            }
          >
            <ColorButton
              key={index}
              label={button.label}
              color={button.color}
              selected={selectedColor === button.color}
            />
            <ColorTitle>{button.label}</ColorTitle>
          </ColorOption>
        ))}
      </ButtonDiv>
      {/* <SelectWrapper>
        <ColorSelect onChange={handleSelect} />
      </SelectWrapper> */}
    </>
  );
}
