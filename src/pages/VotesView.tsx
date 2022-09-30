import { BtnVoltar, ContentContainer, SubTitle, TableLink, TableTd, TableTh, TableTr, TableVoting, Title, TopBar } from "../styles/VotesView"
import Confirmed from '../assets/confirmed.png'
export default function VotesView() {
    return (
      <ContentContainer >
        <TopBar>
          <Title>Votação 1</Title>
          <SubTitle>Opções</SubTitle>
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
                Ações
              </TableTh>
            </TableTr>
  
            <TableTr>
              <TableTd>Opção 1</TableTd>
              <TableTd>Melhor Opção</TableTd>
              <TableTd><TableLink to="/ViewVoting"><img src={Confirmed} width="26"></img></TableLink></TableTd>
            </TableTr>
            <TableTr>
              <TableTd>Segunda Votação</TableTd>
              <TableTd>Segundo Lugar</TableTd>    
              <TableTd><TableLink to="/ViewVoting"><img src={Confirmed} width="26"></img></TableLink></TableTd>
            </TableTr>
          </tbody>
        </TableVoting>
  
        <BtnVoltar>Voltar</BtnVoltar>
      </ContentContainer>
    )
  }
  
  