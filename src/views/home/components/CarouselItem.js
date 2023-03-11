import styled from "styled-components";
import Card from "./Card";
import { useEffect, useRef } from "react";

const Img = styled.img`
    max-width: 100%;
`

const CarouselItem = ({ cards, carouselIndex }) => {
    const ref = useRef();
    useEffect(() => {
        // console.log(ref.current.classList);
        const carousel = ref.current
        if (!carouselIndex) {
            !carousel.classList.contains("active") && carousel.classList.add("active");
        } else {
            carousel.classList.remove("active")
        }
    }, [cards])
    return (
        <div className={`carousel-item ${carouselIndex === 0 ? "active" : ""} i${carouselIndex}`} ref={ref}>
            <div className="card-group">
                {cards.map((card, i) => <Card key={i} card={card} />)}
            </div>
        </div>
    )
};

export default CarouselItem;