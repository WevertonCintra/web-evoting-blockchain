
import { ContentContainer,Label, SubTitle, TopBar, Title, FormField, FormContainer, FormElementContainer, DescriptionField, DescriptionFormField } from "../styles/RegisterVoting";

export default function RegisterVoting() {
  return (
    <ContentContainer>
        <TopBar>
            <Title>Criar Votação</Title>
            <SubTitle>Informações Básicas</SubTitle>
        </TopBar>
        <form>
            <FormContainer>
            <FormElementContainer>
                <Label>Título</Label>
                <FormField type="text" name="title" id="title" placeholder="Digite o título da votação"></FormField>
            </FormElementContainer>
            <FormElementContainer>
                <Label>Término</Label>
                <FormField type="datetime-local" name="endingTime" id="endingTime" placeholder="Selecione uma data"></FormField>
            </FormElementContainer>
            </FormContainer>
            
            <DescriptionField>
                <Label>Descrição</Label>
                <DescriptionFormField type="text" name="description" id="description" placeholder="Digite a descrição da votação"></DescriptionFormField>
            </DescriptionField>
         
            
           
        </form>
        
        
        
        
      
    


    </ContentContainer>

  );
}

