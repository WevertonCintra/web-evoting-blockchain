import { TableVoting, TableTd, Title, TopBar, TableTh, TableTr, TableLink, BtnVoltar, ContentContainer, Btn, TopGrid } from '../styles/ListVotes'

import View from '../assets/view.png'
import { theme } from '../styles/theme'


export default function ListVotes() {
  return (
    <ContentContainer >
      <TopGrid>
        <TopBar>
          <Title>Minhas Votações</Title>
        </TopBar>
        <TableLink to="/registerVoting">
          <Btn color={theme['blue']}>Adicionar</Btn>
        </TableLink>
      </TopGrid>


      <TableVoting>
        <tbody>
          <TableTr>
            <TableTh>
              Título
            </TableTh>
            <TableTh>
              Descrição
            </TableTh>
            <TableTh>
              Status
            </TableTh>
            <TableTh>
              Fim
            </TableTh>
            <TableTh>
              Ações
            </TableTh>
          </TableTr>

          <TableTr>
            <TableTd>Primeira Votação</TableTd>
            <TableTd>Votação da votação</TableTd>
            <TableTd>Finalizado</TableTd>
            <TableTd>29/10/2022 12:00</TableTd>
            <TableTd><TableLink to="/ViewVoting"><img src={View} width="26"></img></TableLink></TableTd>
          </TableTr>
          <TableTr>
            <TableTd>Segunda Votação</TableTd>
            <TableTd>Votação da votação da votação</TableTd>
            <TableTd>Em Andamento</TableTd>
            <TableTd>29/10/2022 12:30</TableTd>
            <TableTd><TableLink to="/ViewVoting"><img src={View} width="26"></img></TableLink></TableTd>
          </TableTr>
        </tbody>
      </TableVoting>

      <BtnVoltar>Voltar</BtnVoltar>
    </ContentContainer>
  )
}
