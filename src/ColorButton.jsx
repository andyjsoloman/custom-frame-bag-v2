/* eslint-disable react/prop-types */
import styled from "styled-components";

const Button = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid black;
  margin: 4px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  opacity: ${(props) => (props.selected ? "100%" : "75%")};
  outline: ${(props) => (props.selected ? "2px solid black" : "none")};
  outline-offset: 2px;
`;

export default function ColorButton({ color, onClick, label, selected }) {
  return (
    <Button
      type="button"
      color={color}
      title={label}
      onClick={onClick}
      selected={selected}
    >
      {" "}
      <span className="visually-hidden">{label}</span>
    </Button>
  );
}
