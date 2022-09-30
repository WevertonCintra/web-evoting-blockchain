import { Btn, BtnContainer, ContentContainer, TopBar, Title, TicketsContainer, TicketContainer, TicketInfo, TicketTitle, TicketCost } from '../styles/RegisterVotingEnd'
import { theme } from '../styles/theme'
import { SubTitle } from '../styles/Cadastro'

import CoinRed from '../assets/coin_red.png'
import CoinGreen from '../assets/coin_green.png'

function RegisterVotingEnd() {
  return (
    <ContentContainer >
      <TopBar>
        <Title>Cadastrar Votação</Title>
        <SubTitle>Finalizar</SubTitle>
      </TopBar>

      <form>
        <TicketsContainer>
          <TicketContainer>
            <TicketTitle color={theme['red']}>
              Custo:
            </TicketTitle >
            <TicketInfo>
              <img src={CoinRed}></img>
              <TicketCost color={theme['red']}>1 bilhete</TicketCost>
            </TicketInfo>
          </TicketContainer>

          <TicketContainer>
            <TicketTitle color={theme['submit']}>
              Disponivel:
            </TicketTitle >
            <TicketInfo>
              <img src={CoinGreen}></img>
              <TicketCost color={theme['submit']}>1 bilhete</TicketCost>
            </TicketInfo>
          </TicketContainer>
        </TicketsContainer>

        <BtnContainer>
          <Btn color={theme['voltar']}>Voltar</Btn>
          <Btn color={theme['submit']}>Concluir</Btn>
        </BtnContainer>
      </form>

    </ContentContainer>
  )
}

export default RegisterVotingEnd