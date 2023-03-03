import styled from "styled-components";

const Img = styled.img`
    max-width: 100%;
`
const CardContainer = styled.div`
    background-color: transparent;
    border: 2px solid;
    border-image: linear-gradient(to top, #FFC107, rgba(0,0,0,0)) 1 20%;
`
const P = styled.p`
    color: #FFC107;
`

const Card = ({ card }) => {
    return (
        <div className="col-md-3">
            <CardContainer className="card p-2">
                <Img src={`/${card.image}`} className="card-img-top img-fluid" alt={card.card} />
                <div className="card-body">
                    <h4 className="card-title">{card.card}</h4>
                    <p className="card-subtitle">Estado: {card.status}</p>
                    <P className="card-text">Desde ${card.price} MXN</P>
                </div>
            </CardContainer>
        </div>
    )
};

export default Card;