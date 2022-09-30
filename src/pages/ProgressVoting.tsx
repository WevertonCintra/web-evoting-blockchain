import { TableVoting, TableTd, Title, TopBar, TableTh, TableTr, TableLink, BtnVoltar, ContentContainer } from '../styles/ProgressVoting'

import View from '../assets/view.png'


function ProgressVoting() {
  return (
    <ContentContainer >
      <TopBar>
        <Title>Votações Em Andamento</Title>
      </TopBar>

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
              Fim
            </TableTh>
            <TableTh>
              Ações
            </TableTh>
          </TableTr>

          <TableTr>
            <TableTd>Primeira Votação</TableTd>
            <TableTd>Votação da votação</TableTd>
            <TableTd>29/10/2022 12:00</TableTd>
            <TableTd><TableLink to="/ViewVoting"><img src={View} width="26"></img></TableLink></TableTd>
          </TableTr>
          <TableTr>
            <TableTd>Segunda Votação</TableTd>
            <TableTd>Votação da votação da votação</TableTd>
            <TableTd>29/10/2022 12:30</TableTd>
            <TableTd><TableLink to="/ViewVoting"><img src={View} width="26"></img></TableLink></TableTd>
          </TableTr>
        </tbody>
      </TableVoting>

      <BtnVoltar>Voltar</BtnVoltar>
    </ContentContainer>
  )
}

export default ProgressVoting