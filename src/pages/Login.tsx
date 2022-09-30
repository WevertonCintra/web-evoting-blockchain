import { ContentContainer, Image, Title, BtnLogin, InputCadastro} from '../styles/Login'
import FileUploader from '../components/FileUploader';
import Imagem from '../assets/login.png';

function Login() {
  return (
    <ContentContainer>
      <Image src={Imagem}></Image>
      <Title>Entrar</Title>

      <form>
      <FileUploader></FileUploader>
        <br></br>
        <InputCadastro type="password" name="password" id="password" placeholder="DIGITE A SENHA">
        </InputCadastro>
        <br></br>
        <BtnLogin type="submit">ENTRAR</BtnLogin>
      </form>
    </ContentContainer>
  )
}

export default Login