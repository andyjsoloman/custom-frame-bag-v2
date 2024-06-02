import styled from "styled-components";

const FooterDiv = styled.div`
  width: 100%;
  background-color: #6eabb4;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-top: 40px;
`;

function Footer() {
  return (
    <FooterDiv>
      <p>&copy; HMPL 2024</p>
    </FooterDiv>
  );
}

export default Footer;
