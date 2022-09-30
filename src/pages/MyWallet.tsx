import { ContentContainer, TopBar, Title, BtnMining, TicketsContainer, TicketContainer, TicketInfo, TicketTitle, TicketCost, BtnVoltar } from '../styles/MyWallet'
import { theme } from '../styles/theme'
import { SubTitle } from '../styles/Cadastro'

import Mining from '../assets/mining.png'
import CoinGreen from '../assets/coin_green.png'

function RegisterVotingEnd() {
  return (
    <ContentContainer >
      <TopBar>
        <Title>Minha Carteira</Title>
      </TopBar>

      <form>
        <TicketsContainer>
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
        <BtnMining color={theme['submit']} title="Minerar"><img src={Mining}></img></BtnMining>


        <BtnVoltar color={theme['voltar']}><span>Voltar</span></BtnVoltar>
      </form>

    </ContentContainer>
  )
}

export default RegisterVotingEnd