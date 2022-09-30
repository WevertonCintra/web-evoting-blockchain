import { Btn, BtnContainer, ContentContainer } from '../styles/Vote'
import { theme } from '../styles/theme'

function Vote() {
  return (
    <ContentContainer>
      <BtnContainer>
        <Btn color={theme['voltar']}>Voltar</Btn>
        <Btn color={theme['submit']}>Votar</Btn>
      </BtnContainer>

    </ContentContainer>
  )
}

export default Vote