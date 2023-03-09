import styled from "styled-components";
import Card from "./Card";

const Img = styled.img`
    max-width: 100%;
`

const CarouselItem = ({ cards, carouselIndex }) => {
    return (
        <div className={`carousel-item ${carouselIndex === 0 ? "active" : ""}`}>
            <div className="card-group">
                {cards.map((card, i) => <Card key={i} card={card} />)}
            </div>
        </div>
    )
};

export default CarouselItem;