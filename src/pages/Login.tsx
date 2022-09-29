import styled from "styled-components";
import { ContentContainer, Image, SubTitle, Title, BtnSubmit, InputPass } from '../styles/Login'
import Imagem from '../assets/user_plus.png';

function Login() {
  return (
    <ContentContainer>
      <Image src={Imagem}></Image>
      <Title>Cadastro</Title>
      <SubTitle>Geração de Chave Privada</SubTitle>

      <form>
        <InputPass type="password" name="password" id="password" placeholder="DIGITE A SENHA">
        </InputPass>
            <br></br>
            <BtnSubmit type="submit">GERAR CHAVE PRIVADA</BtnSubmit>
        </form>
    </ContentContainer>
  )
}

export default Login