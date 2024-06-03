import styled from "styled-components";

const FooterDiv = styled.div`
  width: 100%;
  background-color: #6eabb4;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 40px 0px 12px 0px;
  color: #33494c;
`;

function Footer() {
  return (
    <FooterDiv>
      <p>&copy; HMPL 2024</p>
    </FooterDiv>
  );
}

export default Footer;
