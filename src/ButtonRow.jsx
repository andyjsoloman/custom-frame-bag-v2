/* eslint-disable react/prop-types */
import { useState } from "react";
import { panelColorOptions } from "./constants";
import ColorButton from "./ColorButton";
import styled from "styled-components";

const ButtonDiv = styled.ul`
  margin: 12px 20px 24px 0px;
`;

const ColorOption = styled.li`
  padding: 4px;
  display: flex;
  align-items: center;
  gap: 8px;

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

export default function ButtonRow({
  handleSelectColor,
  panelIndex,
  isOpen,
  colorButtonRef,
}) {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = (panelIndex, color, label) => {
    setSelectedColor(color);
    handleSelectColor(panelIndex, color, label);
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
              ref={index === 0 ? colorButtonRef : null}
              key={index}
              role="menuitem"
              label={button.label}
              color={button.color}
              selected={selectedColor === button.color}
              tabIndex={isOpen ? 0 : -1}
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
