import styled from "styled-components";

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Progress() {
  return (
    <ProgressContainer>
      <span>Panel Colours</span>
      <span>Pockets & Mounting</span>
      <span>Order Info</span>
    </ProgressContainer>
  );
}
