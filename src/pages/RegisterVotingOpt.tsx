import { theme } from '../styles/theme'
import { ContentContainer, Btn, Label, SubTitle, TopBar, Title, FormField, FormContainer, FormElementContainer, DescriptionField, DescriptionFormField, BtnContainer, TopGrid } from "../styles/RegisterVoting";


export default function RegisterVotingOptions() {
    return (
        <ContentContainer>
            <TopGrid>
            <TopBar>
                <Title>Criar Votação</Title>
                <SubTitle>Adicionar opções</SubTitle>
            </TopBar>
            <Btn color={theme['blue']}>Adicionar</Btn>

            </TopGrid>
            
            <form>
                <FormContainer>
                    <FormElementContainer>
                        <Label>Título</Label>
                        <FormField type="text" name="title" id="title" placeholder="Digite o título da votação"></FormField>
                    </FormElementContainer>
                    <FormElementContainer>
                        <Label>Descrição</Label>
                        <FormField type="text" name="Description" id="Description" placeholder="Digite a descrição da votação"></FormField>
                    </FormElementContainer>
                </FormContainer>

                <FormContainer>
                    <FormElementContainer>
                        <Label>Título</Label>
                        <FormField type="text" name="title" id="title" placeholder="Digite o título da votação"></FormField>
                    </FormElementContainer>
                    <FormElementContainer>
                        <Label>Descrição</Label>
                        <FormField type="text" name="Description" id="Description" placeholder="Digite a descrição da votação"></FormField>
                    </FormElementContainer>
                </FormContainer>

                <BtnContainer>
                    <Btn color={theme['voltar']}>Voltar</Btn>
                    <Btn color={theme['next']}>Próximo</Btn>
                </BtnContainer>
            </form>
        </ContentContainer>

    );
}

