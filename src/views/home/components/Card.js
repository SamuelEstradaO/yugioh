import { Link } from "react-router-dom";
import styled from "styled-components";

const Img = styled.img`
    max-width: 100%;
`
const CardContainer = styled(Link)`
    background-color: transparent;
    ${({ carousel }) => carousel ? "border: 2px solid;" : ""}
    ${({ carousel }) => carousel ? "border-image: linear-gradient(to top, #fff34b, rgba(0,0,0,0)) 1 20%;" : ""}
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    flex: 0 1 auto!important;
    text-decoration: none;
    color: white;
`
const P = styled.p`
    color: #fff34b;
`

const Card = ({ card, carousel = true }) => {
    return (
        <CardContainer className="col-md-3 card p-2" carousel={carousel} to={`/list/details?cardId=${card.id}`}>
            <Img src={`/${card.image}`} className="card-img-top img-fluid mx-auto" style={{ width: `${carousel ? "80%" : "95%"}` }} alt={card.card} />
            <div className="card-body">
                <h4 className="card-title">{card.card}</h4>
                <p className="card-subtitle">Estado: {card.status}</p>
            </div>

            <P className="card-footer">Desde ${card.price} MXN</P>
        </CardContainer >
    )
};

export default Card;