import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


export const Global = createGlobalStyle `
*{
  margin: 0;
  padding: 0;
  box-sizing:border-box ;
}
`   

export const Container = styled.div `
  font-family: "Dosis", sans-serif;
`;

export const Header = styled.div `
    margin-top: -7px;
    height: 150px;
    text-align: center;

    background-color: darkblue;

`;
export const HeaderText = styled.h1 `
    margin: 0;
    padding: 0;
    color: white;
    padding-top:30px;
    
`;
export const Body = styled.div `
    margin: auto;
    max-width: 980px;
    margin-bottom: 50px;   
`;