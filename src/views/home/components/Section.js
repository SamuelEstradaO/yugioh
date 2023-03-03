import styled from "styled-components";

import { DivWithImage } from "../../../theme";
import CarouselItem from "./CarouselItem";
import Carousel from "./Carousel";

const H3 = styled.h3`
    color: #FFC107;
`
const Div = styled.div`
    background-color: rgba( 0, 0, 0, 0.2);
    z-index: 1;
    position: relative;
`

const Section = ({ section = "", cards, bgImage, bootstrapClasses = [] }) => {
    return (
        <DivWithImage bgImage={bgImage} className={`${[...bootstrapClasses]}`}>
            <Div className="container p-4">
                <h3 className="mt-2">{section}</h3>
                {cards.lenght > 4 && <Carousel>

                </Carousel>}
                <CarouselItem card={cards[0]} />
            </Div>
        </DivWithImage >
    )
}

export default Section;