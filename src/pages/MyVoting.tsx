import { TableVoting, TableTd, Title, TopBar, TableTh, TableTr, TableLink, BtnVoltar, ContentContainer, Btn, TopGrid, SubTitle } from '../styles/MyVoting'

import View from '../assets/view.png'
import { theme } from '../styles/theme'


export default function MyVoting() {
  return (
    <ContentContainer >
        <TopGrid>
            <TopBar>
                <Title>Votação 1</Title> 
                <SubTitle>Votação sobre as eleições</SubTitle>           
             </TopBar>
             <Btn color={theme['blue']}>Enviar Bilhete</Btn>
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
                Votos
            </TableTh>
           
          </TableTr>

          <TableTr>
            <TableTd>Opção 1</TableTd>
            <TableTd>Melhor Opção</TableTd>
            <TableTd>10</TableTd>
            
          </TableTr>
          <TableTr>
            <TableTd>Opção 2</TableTd>
            <TableTd>Segundo Lugar</TableTd>
            <TableTd>8</TableTd>
            
          </TableTr>
        </tbody>
      </TableVoting>

      <BtnVoltar>Voltar</BtnVoltar>
    </ContentContainer>
  )
}
