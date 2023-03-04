import { useRef, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeaderContext } from "../components/Header";
import { DivWithImage } from "../../theme";
import Carrousel from "./components/Carousel";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchCards, fetchDeluxeCards, fetchRecentCards } from "../../redux/actions/card";
import { isFetchingLastCardsSel, isFetchingDeluxeCardsSel, cardsInfoSel, isFetchingCardsSel } from "../../redux/selectors";
import Section from "./components/Section";

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
    const dispatch = useDispatch();
    const { lastCards, deluxeCards, cards } = useSelector(cardsInfoSel, shallowEqual);
    const isFetchingLastCards = useSelector(isFetchingLastCardsSel, shallowEqual);
    const isFetchingDeluxeCards = useSelector(isFetchingDeluxeCardsSel, shallowEqual)
    const isFetchingCards = useSelector(isFetchingCardsSel);
    const ref = useRef();
    const headerRef = useContext(HeaderContext);
    useEffect(() => {
        dispatch(fetchRecentCards());
        dispatch(fetchDeluxeCards());
        dispatch(fetchCards());
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
            <div className="col-lg-12 col-sm-12 py-5">
                <h4 className="text-center">En mercado TCG lorem ipsum dolor sit amet.</h4>
            </div>
            {!isFetchingLastCards && lastCards.length > 0 && <Section section="Agregado recientemente" bgImage="dragon-bckg.jpg" cards={lastCards} />}
            {!isFetchingDeluxeCards && deluxeCards.length > 0 && <Section section="Edicion de lujo" bgImage="bckg.jpg" cards={deluxeCards} bootstrapClasses={["mt-5"]} />}
            <img src="/banner.jpg" alt="" className="img-fluid my-5" />
            {!isFetchingCards && cards.length > 0 && <Section section="Consulta nuestros ultimos articulos" cards={cards} bootstrapClasses={["mt-5"]} />}
        </>
    )
};

export default Home;