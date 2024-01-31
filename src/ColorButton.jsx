import styled from "styled-components";

const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid black;
  margin: 0px 4px;
  background-color: ${(props) => props.color};
`;

export default function ColorButton({ color, onClick }) {
  return <Button color={color} onClick={onClick} />;
}
