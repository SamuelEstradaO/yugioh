import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

const Div = styled.div`
    background-color:  rgb(225, 29, 53);
    color: white;
    padding: 0.5rem;
    border-radius: 0;
`
const Nav = styled.nav`
    background-image: linear-gradient(to right, #000, transparent);
    background-color: rgba(192,192,192,0.3);
`

const Banner = () => {

    return (
        <header>
            <Div className="alert d-sm-flex justify-content-between m-0">
                <label>Actualizamos las tarjetas continuamente</label>
                <label>Comunicate con nosotros (461) 1234 5678 <FontAwesomeIcon icon={faSquareFacebook} /> <FontAwesomeIcon icon={faSquareInstagram} /></label>
            </Div>
            <Nav className="navbarnavbar-expand-lg navbar-dark">
                <Link className="navbar-brand" to="/">
                    <img src="/logo-banner.png" alt="yu-gi-oh logo" />
                </Link>
                <form className="form-inline">
                    <input type="search" placeholder="Qué tarjeta estas buscando?" className="form-control badge-pill" />
                </form>
            </Nav>
        </header>
    )
};

export default Banner;
