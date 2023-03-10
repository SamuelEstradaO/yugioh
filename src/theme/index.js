import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyler = createGlobalStyle`
    *{
        box-sizing: border-box;

    }
    body{
        background-color: #000; 
        background-image: url("/bg-home-about.jpg");
        color: white;
    }
`;
export const DivWithImage = styled.div`
    background-image: url("${({ bgImage }) => bgImage}");
    color: white;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 2rem
`