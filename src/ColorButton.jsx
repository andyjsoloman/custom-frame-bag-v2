/* eslint-disable react/prop-types */
import styled from "styled-components";

const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid black;
  margin: 0px 4px;
  background-color: ${(props) => props.color};
`;

export default function ColorButton({ color, onClick, label }) {
  return (
    <Button type="button" color={color} onClick={onClick}>
      {" "}
      <span className="visually-hidden">{label}</span>
    </Button>
  );
}
