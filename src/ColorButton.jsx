/* eslint-disable react/prop-types */
import styled from "styled-components";

const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid black;
  margin: 0px 4px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

export default function ColorButton({ color, onClick, label }) {
  return (
    <Button type="button" color={color} title={label} onClick={onClick}>
      {" "}
      <span className="visually-hidden">{label}</span>
    </Button>
  );
}
