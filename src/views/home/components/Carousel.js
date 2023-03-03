import styled from "styled-components";

import { DivWithImage } from "../../../theme";
import CarouselItem from "./CarouselItem";

const H3 = styled.h3`
    color: #FFC107;
`
const Div = styled.div`
    background-color: rgba( 0, 0, 0, 0.2);
    z-index: 1;
    position: relative;
`

const Carousel = ({ section = "", cards }) => {
    return (
        <div className="carousel slide">

        </div>
    )
}

export default Carousel;