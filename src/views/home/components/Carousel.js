import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import * as bootstrap from "bootstrap";

import CarouselItem from "./CarouselItem";
import { useEffect, useRef, useState } from "react";


const Button = styled.button`
    height: fit-content;
    margin: auto;
`

const Carousel = ({ cards }) => {
    const id = uuidv4();
    const carouselContainer = useRef();
    const [carouselCards, setCarouselCards] = useState([]);
    const [arraySize, setArraySize] = useState(0)
    useEffect(() => {
        const divideArray = (array) => {
            const width = window.innerWidth;
            const size = width > 768 ? 4 : 1;
            if (size !== arraySize) {
                setArraySize(size);
                const dividedArray = [];
                for (let i = 0; i < array.length; i += size) {
                    dividedArray.push(array.slice(i, i + size));
                };
                setCarouselCards(dividedArray);
            }
        };
        divideArray(cards);
        const eventListener = () => divideArray(cards)
        window.addEventListener("resize", eventListener)

        return () => {
            window.removeEventListener("resize", eventListener)
        }
    }, [cards, arraySize]);

    return (
        <div className="carousel slide" data-bs-ride="carousel" id={id} ref={carouselContainer}>
            <div className="carousel-inner" style={{ minHeight: "495px" }}>
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