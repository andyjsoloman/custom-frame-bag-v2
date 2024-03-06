/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import BagButtonIcon from "./BagButtonIcon";
import styled from "styled-components";

const Button = styled.button`
  font-family: "Lexend", sans-serif;
  display: flex;
  padding: 6px 12px 8px 12px;

  justify-content: center;
  align-items: center;
  gap: 5px;
  border: none;
  border-radius: 8px;
  background: #fff7ed;

  /* 3D Button */
  box-shadow: 1px -2px 1px 0px rgba(0, 0, 0, 0.25) inset,
    -0.5px 1px 1px 0px #fff inset, 0px 2px 4px 0px rgba(0, 0, 0, 0.1),
    0px -1px 2px 0px rgba(0, 0, 0, 0.2) inset,
    0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 8px 12px 0px rgba(0, 0, 0, 0.08);

  color: #201e1a;

  text-shadow: 0.25px 0.5px 1px #fff;

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export default function BagButton({ onClick, label, bagSize }) {
  const [fillColor, setFillColor] = useState("#F7F0E8");

  useEffect(() => {
    if (bagSize === label) {
      setFillColor("#8DF98B");
    } else {
      setFillColor("#F7F0E8");
    }
  }, [bagSize, label]);

  return (
    <Button onClick={onClick}>
      <BagButtonIcon fillColor={fillColor} />
      {label}
    </Button>
  );
}
