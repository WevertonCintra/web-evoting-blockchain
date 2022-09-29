import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  ImgLink,
} from "../styles/Navbar";
import LogoImg from "../assets/logo.png";

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <ImgLink to="/" >
            <Logo src={LogoImg}>
            </Logo>
          </ImgLink>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/login"> Entrar</NavbarLink>
            <NavbarLink to="/products"> Cadastre-se</NavbarLink>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
    </NavbarContainer>
  );
}

export default Navbar;