import styled from "styled-components";

const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export default function ColorButton({ color }) {
  return <Button color={color} />;
}
