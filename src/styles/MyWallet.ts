import styled from "styled-components";

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

export const TicketsContainer = styled.div`
  display:grid;
  grid-template-columns: 50%;
  justify-content: center;
  margin-top: 3%;
  margin-bottom: 3%;
`;

export const TicketContainer = styled.div`
  display:grid;
  justify-content:center;
  margin-top: 20px;
`;

export const TicketInfo = styled.div`
  display:grid;
  grid-template-columns: auto auto;
  justify-content: space-around;
  width: 230px;
`;

export const TicketCost = styled.h2`
  color: ${props => `${props.color}`};
  margin-top: 15%;
  margin-left: -15%;
`;

export const TicketTitle = styled.h2`
  color: ${props => `${props.color}`};
  text-align: center;
`;

export const BtnMining = styled.button`
  background-color: ${props => `${props.color}`};
  border: 1px solid ${props => `${props.color}`};
  color: white;
  width: 150px;
  height: 46px;
  border-radius: 4px;

  margin: auto;
  display:block;
  margin-top:20px;  
  margin-bottom: 2%;
`;

export const BtnVoltar = styled.button`
  background-color: #6C757D;
  border: 1px solid #6C757D;
  color: white;
  width: 130px;
  height: 46px;
  border-radius: 4px;

  margin: auto;
  display:block;
  margin-top:4%;  
  margin-bottom: 2%;
`;