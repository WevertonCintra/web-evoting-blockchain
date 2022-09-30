import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContentContainer = styled.div`
  width: 100%;
  margin-top: 5%;
`;

export const TableVoting = styled.table`
  border-collapse: collapse;
  width: 100%;
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