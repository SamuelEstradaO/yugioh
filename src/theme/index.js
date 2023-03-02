import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyler = createGlobalStyle`
    *{
        box-sizing: border-box;

    }
    body{
        background-color: #000; 
    }
`;
export const DivWithImage = styled.div`
    background-image: url("/bckg.jpg");
    color: white;
    background-size: cover;
    background-repeat: no-repeat;
`