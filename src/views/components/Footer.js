import styled from "styled-components";
import { DivWithImage as ImageDiv } from "../../theme";

const DivWithImage = styled(ImageDiv)`
    border-radius: 0;
`

const Footer = () => {
    return (
        <footer className="col-lg-12 col-sm-12">
            <DivWithImage bgImage="bg-marquee-blue.jpg">
                <img src="/logo.png" alt="logo" width={"180px"} className="nav justify-content-center" />
            </DivWithImage>
        </footer>
    )
};

export default Footer;