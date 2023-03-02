import { useRef, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeaderContext } from "../components/Header";
import { DivWithImage } from "../../theme";

const CardList = styled(Link)`
    background-color: rgb(225, 29, 53); 
    text-decoration: none;
`
const Banner = styled.div`
    z-index: 0;
    position: relative;
    background-image: url("/main-banner.jpg");
    background-size: cover;
    background-repeat: no-repeat;
`
const BannerContent = styled.div`
    color: white;
    background-image: linear-gradient(to right, #000, #000, #000, transparent); 
`

const Home = () => {
    const ref = useRef();
    const headerRef = useContext(HeaderContext);
    useEffect(() => {
        const setBannerImageTop = () => {
            const headerHeight = headerRef.current.offsetHeight;
            ref.current.style.top = `-${headerHeight}px`;
            ref.current.style.paddingTop = `${headerHeight}px`;
            ref.current.style.marginBottom = `-${headerHeight}px`;
        }
        setBannerImageTop();
        window.addEventListener('resize', setBannerImageTop);

        return () => {
            window.removeEventListener('resize', setBannerImageTop);
        }
    }, [])

    return (
        <>
            <Banner ref={ref} className="col-lg-12 col-sm-12 mt-0">
                <BannerContent className="col-md-4 px-4">
                    <h2>
                        La comunidad en compra-venta de cartas más grande de México
                    </h2>
                    <div className="col-12 ">
                        <CardList to="/list" className="badge rounded-pill mt-4 py-3 px-4 align-self-center">
                            LISTADO COMPLETO DE CARTAS
                        </CardList>
                    </div>
                    <div className="col-12">
                        <img src="/logo-banner.png" className="img-fluid my-4" />
                    </div>
                </BannerContent>
            </Banner>
            <DivWithImage className="col-lg-12 col-sm-12 py-5">
                <h4 className="text-center">En mercado TCG lorem ipsum dolor sit amet.</h4>
            </DivWithImage>
        </>
    )
};

export default Home;