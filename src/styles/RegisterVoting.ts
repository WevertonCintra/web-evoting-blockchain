import styled from "styled-components";

export const ContentContainer = styled.div`
    background-color: white;
    border-radius: 3px;
    width: 960px;
    box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.3);
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    margin-bottom: 5%;    
    `;

export const TopBar = styled.div`
    width: 936px;
    height: 69.5px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    border-bottom: 1px solid green;
    `;
export const FormContainer = styled.div`
    display: grid;
    grid-template-columns: 45% 45%;
    justify-content: space-around;
`;

export const FormElementContainer = styled.div`
    width: 100%;
`;

export const Label = styled.h1`
    font-size: 24px;
    color: black;
    margin:0;
    padding:0;
    margin-top: 2%;
    text-align: left;
`;

export const FormField = styled.input`
    height: 38px;
    width:100%;
    text-align: left;
    border-radius: 3px;
    border: 1px solid gray;
    
`;
export const DescriptionField = styled.div`
    display: grid;
    grid-template-columns: 95%;   
    justify-content: space-around;
`;
export const DescriptionFormField = styled.input`
    height: 120px;
    margin-top: 0px;
    text-align: left;
    border-radius: 3px;
    border: 1px solid gray;
    
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 36px;
    color: black;
    margin:0;
    padding:0;
  `;

export const SubTitle = styled.h6`
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => props.theme['subtitulo']};
  margin:0;
  padding:0;
  text-align: center;
  border-bottom: 90%;
  border-bottom-color: green;  
`;

export const Btn = styled.button`
  background-color: ${props => `${props.color}`};
  border: 1px solid ${props => `${props.color}`};
  color: white;
  width: 130px;
  height: 46px;
  border-radius: 4px;
  margin: 20px;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;  
`;

