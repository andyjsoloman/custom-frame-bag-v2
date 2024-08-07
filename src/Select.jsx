/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { COLORS } from "./constants";
import { CaretDown } from "@phosphor-icons/react";

const Select = ({ value, onChange, children }) => {
  function getDisplayedValue(value, children) {
    const childArray = React.Children.toArray(children);
    const selectedChild = childArray.find(
      (child) => child.props.value === value
    );

    return selectedChild ? selectedChild.props.children : "Full Frame";
  }

  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper style={{ "--size": 32 + "px" }}>
          <CaretDown size={32} color="#4d7075" />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationalBit = styled.div`
  color: #101a1b;
  border: 2px solid #4d7075;
  background-color: #f0f8f9;
  font-size: ${16 / 16}rem;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

export default Select;
