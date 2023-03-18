import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Img = styled.img`
    max-width: 100%;
`
const CardContainer = styled.div`
    background-color: white;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    flex: 0 1 auto!important;
    text-decoration: none;
    color: black;
`
const P = styled.p`
    background-color: none;
`

const Card = ({ card }) => {
    return (
        <CardContainer className="col-md-4 col-6 card p-2 mb-3">
            <Link to={`/list/${card.id}`}><Img src={`/${card.image}`} className="card-img-top img-fluid mx-auto" alt={card.card} /></Link>
            <div className="card-header">
                <h4 className="card-title">{card.card}</h4>
            </div>
            <div className="card-body">
                <p >Estado: {card.status}</p>
                <p>Stock: {card.stock} disponibles</p>
                <p className="card-subtitle">Desde ${card.price} MXN</p>
            </div>
            <div className="card-footer" style={{ backgroundColor: "transparent" }}>
                <button className="btn btn-danger"><FontAwesomeIcon icon={faCartShopping} />Agregar al carrito</button>
            </div>

        </CardContainer >
    )
};

export default Card;