/* eslint-disable react/prop-types */
import { panelColorOptions } from "./constants";
import ColorButton from "./ColorButton";
import styled from "styled-components";

const ButtonDiv = styled.div`
  margin: 12px 20px 40px 20px;
`;

export default function ButtonRow({ handleSelectColor, panelIndex }) {
  return (
    <ButtonDiv>
      {panelColorOptions.map((button, index) => (
        <ColorButton
          key={index}
          label={button.label}
          color={button.color}
          onClick={() =>
            handleSelectColor(panelIndex, button.color, button.label)
          }
        />
      ))}
    </ButtonDiv>
  );
}
