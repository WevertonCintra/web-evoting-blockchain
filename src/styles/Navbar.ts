import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: black;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-start;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: flex-end;
  margin-right: 2%;
  align-items: center;
  
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: medium;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  margin-top: 25px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const PerfilDropdown = styled(Link)`
  color: white;
  font-size: medium;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const ImgLink = styled(Link)`

`;

export const Logo = styled.img`
  max-height: 50px;
  margin: 10px;
  max-width: 180px;
  height: auto;
`;