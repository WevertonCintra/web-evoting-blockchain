import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme['footer']};
  height: 120px;
`;

export const FooterVoidContainer = styled.div`
  display:flex;
  flex: 10%;
`;

export const FooterLinkContainer = styled.div`
  display: flex;
  flex: 100%;
  height: 35px;  
  flex-direction: column;
  flex-wrap: wrap;
  align-content:space-between;
  width:60%;
  margin-left: 20%;
  
`;

export const FooterTitle = styled.h1`
  text-align:center;
  margin-top: 1%;
  color: white;
`;

export const FooterSubTitle = styled.h6`
  text-align:center;
  font-weight: lighter;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
`;

export const ImgLink = styled.a``;

export const Logo = styled.img`
  max-height: 40px;
  max-width: auto;
  height: auto;
`;