import { v4 as uuidv4 } from "uuid";

import CarouselItem from "./CarouselItem";

const divideArray = (array, size) => {
    const dividedArray = [];
    for (let i = 0; i < array.length; i += size) {
        dividedArray.push(array.slice(i, i + size));
    };
    return dividedArray;
};
const Carousel = ({ cards }) => {
    const id = uuidv4();
    const carouselCards = divideArray(cards, 4);
    return (
        <div className="carousel carousel-dark slide" data-bs-ride="carousel" id={id}>
            <div className="carousel-inner">
                {carouselCards.map((cardsGroup, i) => <CarouselItem key={i} cards={cardsGroup} carouselIndex={i} />)}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
        </div>
    )
}

export default Carousel;