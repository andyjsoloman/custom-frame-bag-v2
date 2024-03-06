/* eslint-disable react/prop-types */
import Price from "./Price";
import Progress from "./Progress";
import Submit from "./Submit";
import styled from "styled-components";

const FooterWrapper = styled.div`
  width: 800px;
  margin: 24px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Footer({ bagSize, inputs }) {
  return (
    <FooterWrapper>
      <Price bagSize={bagSize} inputs={inputs} />
      {/* <Progress /> */}
      <Submit />
    </FooterWrapper>
  );
}
