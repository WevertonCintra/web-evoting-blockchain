import { Btn, BtnContainer, ContentContainer, TopBar, Title, FormContainer, FormElementContainer, Label, FormField, TicketsContainer, TicketContainer, TicketInfo, TicketTitle, TicketCost } from '../styles/Vote'
import { theme } from '../styles/theme'
import { SubTitle } from '../styles/Cadastro'

import TicketRed from '../assets/ticket_red.png'
import TicketGreen from '../assets/ticket_green.png'

function Vote() {
  return (
    <ContentContainer >
      <TopBar>
        <Title>Votar</Title>
        <SubTitle>Votação x</SubTitle>
      </TopBar>

      <form>
        <FormContainer>
          <FormElementContainer>
            <Label>Título</Label>
            <FormField type="text" name="title" id="title" placeholder="Digite o título da votação" readOnly></FormField>
          </FormElementContainer>
          <FormElementContainer>
            <Label>Término</Label>
            <FormField type="datetime-local" name="endingTime" id="endingTime" placeholder="Selecione uma data" readOnly></FormField>
          </FormElementContainer>
        </FormContainer>

        <TicketsContainer>
          <TicketContainer>
            <TicketTitle color={theme['red']}>
              Custo:
            </TicketTitle >
            <TicketInfo>
              <img src={TicketRed}></img>
              <TicketCost color={theme['red']}>1 bilhete</TicketCost>
            </TicketInfo>
          </TicketContainer>

          <TicketContainer>
            <TicketTitle color={theme['submit']}>
              Disponivel:
            </TicketTitle >
            <TicketInfo>
              <img src={TicketGreen}></img>
              <TicketCost color={theme['submit']}>1 bilhete</TicketCost>
            </TicketInfo>
          </TicketContainer>
        </TicketsContainer>

        <BtnContainer>
          <Btn color={theme['voltar']}>Voltar</Btn>
          <Btn color={theme['submit']}>Votar</Btn>
        </BtnContainer>
      </form>

    </ContentContainer>
  )
}

export default Vote