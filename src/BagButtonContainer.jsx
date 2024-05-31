/* eslint-disable react/prop-types */
import { bagSizes } from "./constants";
import styled from "styled-components";
import BagButton from "./BagButton";

const Container = styled.div`
  display: flex;
  /* flex-direction: row; */
  /* position: absolute; */
  bottom: 150px;
  align-items: center;
  gap: 24px;
  justify-content: space-between;
  padding: 40px 40px 0px 40px;
  margin-top: 40px;
  /* border: 2px solid grey; */

  background: #f0f8f9;
  /* margin-bottom: 20px; */
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export default function BagButtonContainer({ handleSelectBag, bagSize }) {
  return (
    <Container>
      {bagSizes.map((bag, index) => (
        <BagButton
          key={index}
          label={bag.label}
          bagSize={bagSize}
          onClick={() => handleSelectBag(bag.label)}
        />
      ))}
    </Container>
  );
}
