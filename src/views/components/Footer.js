import styled from "styled-components";
import { DivWithImage as ImageDiv } from "../../theme";

const DivWithImage = styled(ImageDiv)`
    border-radius: 0;
`

const Footer = () => {
    return (
        <footer className="col-lg-12 col-sm-12">
            <DivWithImage bgImage="bg-marquee-blue.jpg" className="p-2">
                <span className="nav justify-content-center my-2" ><img src="/logo.png" alt="logo" width={"180px"} className="py-2" /></span>
                <p className="nav justify-content-center justify-content-md-end my-2 pe-3">Comunicate con nosotros (461) 123 4567</p>
                <p className="nav justify-content-center my-2">MercadoTCG 2021 All Right Reserved</p>
            </DivWithImage>
        </footer>
    )
};

export default Footer;