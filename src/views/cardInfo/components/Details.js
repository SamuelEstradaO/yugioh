import styled from "styled-components";

const Div = styled.div`
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    border-radius: 0.5rem;
`

const Details = ({ cardInfo }) => {

    return (
        <Div className="card">
            <div className="card-body">
                <ul className="list-group">
                    <li className="list-group-item"><b>Caracteristicas principales</b></li>
                    <ul className="list-group list-group-horizontal-md w-100">
                        <li className="list-group-item" style={{ width: "50%" }}>Línea</li>
                        <li className="list-group-item w-100">{cardInfo.line}</li>
                    </ul>
                    <ul className="list-group list-group-horizontal-md w-100">
                        <li className="list-group-item" style={{ width: "50%" }}>Deck</li>
                        <li className="list-group-item w-100">{cardInfo.deck}</li>
                    </ul>
                    <ul className="list-group list-group-horizontal-md w-100">
                        <li className="list-group-item" style={{ width: "50%" }}>Rareza</li>
                        <li className="list-group-item w-100">{cardInfo.rarity}</li>
                    </ul>
                    <ul className="list-group list-group-horizontal-md w-100">
                        <li className="list-group-item" style={{ width: "50%" }}>Disponibles</li>
                        <li className="list-group-item w-100">{cardInfo.stock}</li>
                    </ul>
                </ul>
            </div>
        </Div>
    )
};
export default Details;