/* eslint-disable react/prop-types */
import { bagSizes } from "./constants";
import styled from "styled-components";
import BagButton from "./BagButton";
import BagSelect from "./BagSelect";

const Container = styled.div`
  display: flex;
  /* flex-direction: row; */
  /* position: absolute; */
  bottom: 150px;
  align-items: center;
  gap: 24px;
  justify-content: space-between;
  padding: 40px 40px 0px 0px;
  margin: 40px 20px 0px 0px;
  /* border: 2px solid grey; */

  background: #f0f8f9;
  /* margin-bottom: 20px; */
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const SelectDiv = styled.div`
  width: 280px;
  @media (min-width: 1170px) {
    display: none;
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

      <SelectDiv>
        <BagSelect onChange={handleSelectBag} />
      </SelectDiv>
    </Container>
  );
}
