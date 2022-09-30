import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContentContainer = styled.div`
  width: 100%;
  margin-top: 5%;
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