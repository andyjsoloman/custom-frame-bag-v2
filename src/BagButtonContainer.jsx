import { bagSizes } from "./constants";
import styled from "styled-components";
import BagButton from "./BagButton";

const Container = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 100px;
  justify-content: space-between;
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
