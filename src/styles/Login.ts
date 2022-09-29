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
  padding:0;
`;

export const SubTitle = styled.h6`
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => props.theme['subtitulo']};
  margin:0;
  padding:0;
  text-align: center;  
`;

export const InputPass = styled.input`
  width: 300px;
  height: 30px;
  margin-top: 40px;
  text-align: center;
  border-radius: 2px;
  border: 1px solid;
  box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.3);
`;

export const BtnSubmit = styled.button`
  color: white;
  width: 300px;
  height: 30px;
  box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.3);
  margin-top: 10px;
  border: solid ${(props) => props.theme['submit']};
  border-radius: 2px;
  background-color: ${(props) => props.theme['submit']};
  margin-bottom: 30%;
 `;