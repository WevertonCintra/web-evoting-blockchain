import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: ${(props) => props.theme['verde']};
  @media (min-width: 700px) {
    height: 110px;
  }
`;

export const FooterVoidContainer = styled.div`
  display:flex;
  flex: 10%;
`;

export const FooterLinkContainer = styled.div`
  display: flex;
  flex: 80%;
  height: 50px;  
  flex-direction: column;
  flex-wrap: wrap;
  align-content:space-between;
  width:60%;
  margin-left: 20%;
  
`;

export const Logo = styled.img`
  max-height: 50px;
  margin: 10px;
  max-width: 180px;
  height: auto;
`;