import styled from "styled-components";

export const ContentContainer = styled.div`

    backgroud: white;
    width: 960px;
    height: 476px;
    box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.3);
    margin-left: auto;
    margin-right: auto;
  
    `;

export const TopBar = styled.div`
    backgroud: white;
    width: 936px;
    height: 69.5px;
    margin-left: auto;
    margin-right: auto;
  
    border-bottom: 1px solid green;
    `;
export const FormContainer = styled.div`
    backgroud: white;
    width: 421px;
    height: 83px;
    margin-left: 10%;
    margin-right: auto;
    margin-top: 3%;
   
    display: flex;
    align-content:space-between;
`;

export const FormElementContainer = styled.div`
    backgroud: white;
    width: 421px;
    height: 83px;
    
    margin-right: auto;
   
    display: row;
`;

export const Label = styled.h1`
    font-size: 24px;
    color: black;
    margin:0;
    padding:0;
    text-align: left;
`;

export const FormField = styled.input`
    width: 380px;
    height: 38px;
    margin-top: 15px;
    margin-right: 20px;
    text-align: left;
    border-radius: 3px;
    border: 1px solid gray;
    
`;
export const DescriptionField = styled.div`
    backgroud: white;
    text-align: top_left;
    width: 866px;
    height: 165px;
    margin-left: 10%;
    margin-right: auto;
    margin-top: 3%;
    


`;
export const DescriptionFormField = styled.input`
    width: 780px;
    height: 120px;
    margin-top: 15px;
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
  font-size: 15px;
  color: ${(props) => props.theme['subtitulo']};
  margin:0;
  padding:0;
  text-align: center;
  border-bottom: 90%;
  border_bottom_color: green;  
`;

=======
  display: grid;
  justify-content: center;
  margin-top: 5%;
`;

