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
                    <ul className="list-group list-group-horizontal-md">
                        <li>Línea</li>
                        <li>{cardInfo.line}</li>
                    </ul>
                    <ul className="list-group"></ul>
                    <ul className="list-group"></ul>
                    <ul className="list-group"></ul>
                </ul>
            </div>
        </Div>
    )
};
export default Details;