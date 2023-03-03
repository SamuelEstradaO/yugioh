import styled from "styled-components";
import Card from "./Card";

const Img = styled.img`
    max-width: 100%;
`

const CarouselItem = ({ card }) => {
    return (
        <div className="container">
            <Card card={card} />
        </div>
    )
};

export default CarouselItem;