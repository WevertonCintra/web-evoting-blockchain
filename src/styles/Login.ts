import styled from "styled-components";

export const ContentContainer = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 5%;
`;

export const Image = styled.img`
  height: 110px;
  position:relative;
  margin-left:auto;
  margin-right:auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  color: black;
  margin:0;
  margin-bottom: 40px;
  padding:0;
`;

export const InputFile = styled.input`
  width: 300px;
  height: 30px;
  margin-top: 10px;
  text-align: center;
  border-radius: 2px;
  border: 1px solid;
  
`;

export const InputCadastro = styled.input`
  width: 300px;
  height: 30px;
  margin-top: 10px;
  text-align: center;
  border-radius: 2px;
  border: 1px solid;
  box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.3);
`;

export const BtnLogin = styled.button`
  color: white;
  width: 300px;
  height: 30px;
  box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.3);
  margin-top: 10px;
  border: solid ${(props) => props.theme['next']};
  border-radius: 2px;
  background-color: ${(props) => props.theme['next']};
  margin-bottom: 30%;
 `;