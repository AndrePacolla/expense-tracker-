import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Logo from "../src/assets/financa.png"


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
    display: flex;
    justify-content: center;
    margin-top: -7px;
    height: 150px;
    text-align: center;
    background-color: rgb(75, 110, 49);

`;

export const Image = styled.div`
  margin-top: 12px; 
  margin-left:15px;
  width: 115px;
  height: 115px;
  background-image: url(${Logo});
  background-size:cover;
  background-position: center;
  background-repeat: no-repeat ;
 
`
export const HeaderText = styled.h1 `   
    flex: 1;
    color: white;
    margin-right: 170px;
    font-size: 50px;
    padding-top:30px;
    
`;
export const Body = styled.div `
    margin: auto;
    max-width: 980px;
    margin-bottom: 50px;   
`;