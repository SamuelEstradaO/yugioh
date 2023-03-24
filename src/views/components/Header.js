import { createContext, useRef } from "react";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import LogInModal from "./LogInModal";


const Div = styled.div`
    background-color:  rgb(225, 29, 53);
    color: white;
    padding: 0.5rem;
    border-radius: 0;
`
const Nav = styled.nav`
    background-image: linear-gradient(to right, #000, transparent);
    background-color: rgba(192,192,192,0.3);
    & .shopping-icon{
        color: white;
    }
    
    & div.flex-container{
        display: flex;
    }
`

const Button = styled.button`
    background-color: rgb(225, 29, 53);
`
const NavBar = styled.header`
    position: relative;
    z-index: 1;
`
export const HeaderContext = createContext({})

const Header = () => {
    const headerRef = useRef();
    return (
        <HeaderContext.Provider value={headerRef}>
            <div className="container">
                <NavBar className="col-lg-12 col-sm-12 py-0">
                    <Div className="alert d-sm-flex justify-content-between m-0">
                        <label>Actualizamos las tarjetas continuamente</label>
                        <label className="d-none d-sm-none d-md-block">Comunicate con nosotros (461) 1234 5678 <FontAwesomeIcon icon={faSquareFacebook} /> <FontAwesomeIcon icon={faSquareInstagram} /></label>
                    </Div>
                    <Nav className="navbar navbar-expand-lg navbar-dark flex-md-nowrap" ref={headerRef}>
                        <Link className="navbar-brand" to="/">
                            <img src="/logo.png" alt="yu-gi-oh logo" width="280" />
                        </Link>
                        <div className="justify-content-end collapse navbar-collapse d-none d-sm-none  d-md-flex">
                            <form className="form-inline">
                                <input type="search" placeholder="Qué tarjeta estas buscando?" className="form-control rounded-pill" />
                            </form>
                            <Button className="badge rounded-pill ms-4 py-3 px-4" data-bs-toggle="modal"
                                data-bs-target="#logInModal"><FontAwesomeIcon icon={faUser} /> Iniciar sesión</Button>
                            <FontAwesomeIcon className="shopping-icon mx-4" icon={faCartShopping} />
                        </div>
                        <div className="col-12 d-md-none px-3">
                            <form className="form-inline">
                                <input type="search" placeholder="Qué tarjeta estas buscando?" className="form-control rounded-pill" />
                            </form>
                        </div>
                    </Nav>
                </NavBar>
                <LogInModal />
                <Outlet />
            </div>
        </HeaderContext.Provider>
    )
};

export default Header;
