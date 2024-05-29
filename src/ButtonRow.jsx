/* eslint-disable react/prop-types */
import { useState } from "react";
import { panelColorOptions } from "./constants";
import ColorButton from "./ColorButton";
import styled from "styled-components";

import ColorSelect from "./ColorSelect";

const ButtonDiv = styled.div`
  margin: 12px 20px 40px 20px;
  display: none;

  @media (min-width: 1100px) {
    display: revert;
  }
`;

const SelectWrapper = styled.div`
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
          <ColorButton
            key={index}
            label={button.label}
            color={button.color}
            onClick={() =>
              handleButtonClick(panelIndex, button.color, button.label)
            }
            selected={selectedColor === button.color}
          />
        ))}
      </ButtonDiv>
      <SelectWrapper>
        <ColorSelect onChange={handleSelect} />
      </SelectWrapper>
    </>
  );
}
