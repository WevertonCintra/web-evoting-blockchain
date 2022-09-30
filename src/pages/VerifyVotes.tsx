import { TableVoting, TableTd, Title, TopBar, TableTh, TableTr, TableLink, BtnVoltar, ContentContainer, Btn, SubTitle } from '../styles/VerifyVotes'




export default function VerifyVotes() {
  return (
    <ContentContainer >
        
        <TopBar>
            <Title>
                Votação 1</Title>
            <SubTitle>
                Verificar Votos
            </SubTitle>
            </TopBar>
          

 
      

      <TableVoting>
        <tbody>
          <TableTr>
            <TableTh>
              Codigo Hash
            </TableTh>
            <TableTh>
              Id da Opção
            </TableTh>
            <TableTh>
                Id do Bloco
            </TableTh>
            
            <TableTh>
              Timestamp
            </TableTh>
          </TableTr>

          <TableTr>
            <TableTd>3c2f8238e7204d545955058302c2d420</TableTd>
            <TableTd>1</TableTd>
            <TableTd>1</TableTd>
            <TableTd>08/09/2022 12:01:20</TableTd>
          
          </TableTr>
          <TableTr>
            <TableTd>d5534642e7879e49666126d5e0b89067</TableTd>
            <TableTd>2</TableTd>
            <TableTd>2</TableTd>
            <TableTd>08/09/2022 12:05:40</TableTd>
        
          </TableTr>
        </tbody>
      </TableVoting>

      <BtnVoltar>Voltar</BtnVoltar>
    </ContentContainer>
  )
}
