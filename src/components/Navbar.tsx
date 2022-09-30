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
  PerfilDropdown,
} from "../styles/Navbar";
import LogoImg from "../assets/logo.png";
import Perfil from "../assets/perfil.png"

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
            <NavbarLink to="/cadastro"> Cadastre-se</NavbarLink>

            <NavbarLink to="/cadastro"> Votações em Andamento</NavbarLink>
            <NavbarLink to="/cadastro"> Votações Finalizadas</NavbarLink>
            <PerfilDropdown to="/cadastro">
              <img src={Perfil} width="40px"></img>
            </PerfilDropdown>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
    </NavbarContainer>

  );
}

export default Navbar;