/* eslint-disable react/prop-types */
import styled from "styled-components";
import { forwardRef } from "react";

const Button = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid black;
  margin: 4px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  opacity: ${(props) => (props.selected ? "100%" : "75%")};
  outline: none;
  &:focus-visible {
    outline: 2px solid blue;
    outline-offset: 2px;
  }
`;

const ColorButton = forwardRef(({ color, onClick, label, selected }, ref) => (
  <Button
    ref={ref}
    type="button"
    color={color}
    title={label}
    aria-label={label}
    onClick={onClick}
    selected={selected}
  >
    {" "}
  </Button>
));

ColorButton.displayName = "ColorButton";

export default ColorButton;
