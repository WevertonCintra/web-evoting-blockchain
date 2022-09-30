import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContentContainer = styled.div`
    background-color: white;
    border-radius: 3px;
    width: 90%;
    box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.3);
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    margin-bottom: 5%;    
    padding-bottom: 1px;
    padding-top: 1.5%;
    `;

export const TopBar = styled.div`
    width: 98%;
    margin-left: auto;
    margin-right: auto;
    border-bottom: 1px solid green;

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
export const TableVoting = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top:2%;
`;

export const TableTd = styled.td`
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

export const TableTh = styled.th`
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

export const TableTr = styled.tr`
   &:not(:first-child):hover{
    background-color: #E1E1E6;
   };
`;

export const TableLink = styled(Link)`
  color: white;
  font-size: medium;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  margin-top: 25px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const BtnVoltar = styled.button`
  background-color: #6C757D;
  border: 1px solid #6C757D;
  margin-top: 20px;
  color: white;
  width: 130px;
  height: 46px;
  border-radius: 4px;

  margin: auto;
  display:block;
  margin-top:20px;  
  margin-bottom: 2%;
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