/* eslint-disable react/prop-types */
import { bagSizes } from "./constants";
import styled from "styled-components";
import BagButton from "./BagButton";

const Container = styled.div`
  width: 800px;
  display: flex;
  /* flex-direction: row; */
  /* position: absolute; */
  bottom: 150px;
  align-items: center;
  justify-content: space-between;
  padding: 40px 60px;
  border: 2px solid grey;
  border-radius: 20px;
  background-color: #fff;
  margin-bottom: 20px;
`;

export default function BagButtonContainer({ handleSelectBag }) {
  return (
    <Container>
      {bagSizes.map((bag, index) => (
        <BagButton
          key={index}
          label={bag.label}
          onClick={() => handleSelectBag(bag.label)}
        />
      ))}
    </Container>
  );
}
