import { ContentContainer, Image, Title, BtnSubmit, InputCadastro, InputFile } from '../styles/Login'
import Imagem from '../assets/login.png';

function Login() {
  return (
    <ContentContainer>
      <Image src={Imagem}></Image>
      <Title>Entrar</Title>

      <form>
        <input type="file" style={{display:'none'}} />
        <br></br>
        <InputCadastro type="password" name="password" id="password" placeholder="DIGITE A SENHA">
        </InputCadastro>
        <br></br>
        <BtnSubmit type="submit">GERAR CHAVE PRIVADA</BtnSubmit>
      </form>
    </ContentContainer>
  )
}

export default Login