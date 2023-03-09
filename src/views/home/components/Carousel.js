import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

import CarouselItem from "./CarouselItem";

const divideArray = (array, size) => {
    const dividedArray = [];
    for (let i = 0; i < array.length; i += size) {
        dividedArray.push(array.slice(i, i + size));
    };
    return dividedArray;
};

const Button = styled.button`
    height: fit-content;
    margin: auto;
`

const Carousel = ({ cards }) => {
    const id = uuidv4();
    const carouselCards = divideArray(cards, 4);
    return (
        <div className="carousel carousel-dark slide" data-bs-ride="carousel" id={id}>
            <div className="carousel-inner">
                {carouselCards.map((cardsGroup, i) => <CarouselItem key={i} cards={cardsGroup} carouselIndex={i} />)}
            </div>
            <Button className="carousel-control-prev" style={{ left: "-10%" }} type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon btn btn-danger p-3" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </Button>
            <Button className="carousel-control-next" style={{ right: "-10%" }} type="button" data-bs-target={`#${id}`} data-bs-slide="next">
                <span className="carousel-control-next-icon btn btn-danger p-3" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </Button>
        </div>
    )
}

export default Carousel;