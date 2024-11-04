/* eslint-disable react/prop-types */
import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => (props.$isActive ? "#f0f8f9" : "#4d7075")};
  background-color: ${(props) => (props.$isActive ? "#4d7075" : "#f0f8f9")};

  letter-spacing: 1px;
  display: flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px solid #4d7075;
  border-radius: 8px;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  display: none;

  @media (min-width: 1170px) {
    display: revert;
  }
  &:focus-visible {
    outline: 2px solid blue;
    outline-offset: 2px;
  }
`;

export default function BagButton({ onClick, label, bagSize }) {
  const isActive = bagSize === label;

  return (
    <Button onClick={onClick} $isActive={isActive}>
      {label}
    </Button>
  );
}
