import styled from "styled-components";
import { createContext } from "react";

import { DivWithImage } from "../../../theme";
import CarouselItem from "./CarouselItem";
import Carousel from "./Carousel";
import CardsContainer from "./CardsContainer";

const H3 = styled.h3`
    color: #FFC107;
`
const Div = styled.div`
    ${({ bgImage }) => bgImage.length > 0 ? "background-color : rgba(0, 0, 0, 0.2);" : null}
    z-index: 1;
    position: relative;
    border-radius: 2rem;
`

const Section = ({ section = "", cards, bgImage = "", bootstrapClasses = [] }) => {
    return (
        <DivWithImage bgImage={bgImage} className={`${bootstrapClasses.join(" ")}`}>
            <Div className="container p-4" bgImage={bgImage}>
                {section.length > 0 && <h3 className={`mt-2`}>{section}</h3>}
                {cards.length > 4 && <Carousel cards={cards} />}
                {cards.length <= 4 && <CardsContainer cards={cards} />}
            </Div>
        </DivWithImage >
    )
}

export default Section;