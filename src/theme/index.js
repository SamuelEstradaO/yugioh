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
export const Banner = styled.div`
    z-index: 0;
    position: relative;
    background-image: url("/main-banner.jpg");
    background-size: cover;
    background-repeat: no-repeat;
`
export const BgDiv = styled.div`
    background-image: url("/background.svg");
    background: radial-gradient(circle at top left,transparent 9%, #ffa2a2 10% ,#ffa2a2 15% , transparent 16%) , radial-gradient(circle at bottom left,transparent 9%, #ffa2a2 10% ,#ffa2a2 15% , transparent 16%), radial-gradient(circle at top right ,transparent 9%, #ffa2a2 10% ,#ffa2a2 15% , transparent 16%) , radial-gradient(circle at bottom right,transparent 9%, #ffa2a2 10% ,#ffa2a2 15% , transparent 16%),radial-gradient(circle, transparent 25%, #ffffff  26%),linear-gradient(45deg, transparent 46%, #ffa2a2 47%, #ffa2a2 52%, transparent 53%), linear-gradient(135deg, transparent 46%, #ffa2a2 47%, #ffa2a2 52%, transparent 53%);
    background-size: 3em 3em;
    background-color: #ffffff;
    opacity: 1;
    color: black;
`