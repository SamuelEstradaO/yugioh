import styled from "styled-components";
import { useContext, useEffect, useRef, useState } from "react";

import { Banner, DivWithImage as ImageDiv } from "../../theme";
import { HeaderContext } from "../components/Header";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../../redux/actions/card";
import { Link } from "react-router-dom";
import FormCheck from "./components/FormCheck";
import { cardsInfoSel, isFetchingCardsSel } from "../../redux/selectors";
import Card from "./components/Card";

const DivWithImage = styled(ImageDiv)`
    border-radius: 0;
`
const Div = styled.div`
    background: radial-gradient(circle at top left,transparent 9%, #ffa2a2 10% ,#ffa2a2 15% , transparent 16%) , radial-gradient(circle at bottom left,transparent 9%, #ffa2a2 10% ,#ffa2a2 15% , transparent 16%), radial-gradient(circle at top right ,transparent 9%, #ffa2a2 10% ,#ffa2a2 15% , transparent 16%) , radial-gradient(circle at bottom right,transparent 9%, #ffa2a2 10% ,#ffa2a2 15% , transparent 16%),radial-gradient(circle, transparent 25%, #ffffff  26%),linear-gradient(45deg, transparent 46%, #ffa2a2 47%, #ffa2a2 52%, transparent 53%), linear-gradient(135deg, transparent 46%, #ffa2a2 47%, #ffa2a2 52%, transparent 53%);
    background-size: 3em 3em;
    background-color: #ffffff;
    opacity: 1;
    color: black;
`
const Input = styled.input`
    position: relative;
    &:before{
        position: absolute;
        left: 0;
        bottom: -90%;
        content: "${({ min }) => min}";
    }
    &:after{
        position: absolute;
        right: 0;
        bottom: -90%;
        content: "${({ max }) => max}";
    }
`
const status = ["Todos", "Excelente", "Bueno", "Regular", "Mal"]
const languages = ["Todos", "Espanol", "Ingles", "Frances", "Italiano", "Chino"]



const List = () => {
    const ref = useRef();
    const dispatch = useDispatch();
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(2000);
    const { cards } = useSelector(cardsInfoSel);
    const isFetchingCards = useSelector(isFetchingCardsSel, shallowEqual);
    const headerRef = useContext(HeaderContext);
    const handleChange = (e, setValue) => {
        console.log(e.target.value);
        setValue(e.target.value)
    }
    useEffect(() => {
        dispatch(fetchCards());
        const setBannerImageTop = () => {
            const headerHeight = headerRef.current.offsetHeight;
            ref.current.style.top = `- ${headerHeight} px`;
            ref.current.style.paddingTop = `${headerHeight} px`;
            ref.current.style.marginBottom = `- ${headerHeight} px`;
        }
        setBannerImageTop();
        window.addEventListener('resize', setBannerImageTop);

        return () => {
            window.removeEventListener('resize', setBannerImageTop);
        }
    }, [])
    return (
        <>
            <Banner className="col-lg-12 col-sm-12 mt-0" ref={ref}>
                <h2 className="py-4 text-center my-0" style={{ backgroundColor: "rgba(0,0,0,0.25)" }}>
                    Listado completo de cartas
                </h2>
            </Banner>
            <Div className="col-lg-12 col-sm-12 container">
                <div className="col-12 row">
                    <nav className="col-lg-12 col-sm-12 ps-4 py-4" aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">List</li>
                        </ol>
                    </nav>
                    <div className="col-12 d-md-none">
                        <button type="button" className="btn rounded-pill btn-danger py-2 mb-4 w-100" style={{ fontSize: "1.5rem" }}
                            data-bs-toggle="modal"
                            data-bs-target="#filterModal"
                        >
                            Filtros
                        </button>
                    </div>
                    <div className="modal fade" id="filterModal" tabIndex="-1" aria-labelledby="filterModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">
                                        Filtros
                                    </h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="card mx-3" style={{ boxShadow: "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)" }}>
                                        <div className="card-header">
                                            Filtrar por:
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <label className="form-label">
                                                    Precio:
                                                </label>
                                                <div className="col-12">
                                                    <label hmtlFor="minPrice" className="form-label">Precio minimo: {minValue}</label>
                                                    <Input type="range" className="form-range px-3 mb-4" id="minPrice" min="0" max={parseInt(maxValue) - 1} onChange={e => handleChange(e, setMinValue)} value={minValue} />
                                                    <label hmtlFor="maxPrice" className="form-label">Precio maximo: {maxValue}</label>
                                                    <Input type="range" className="form-range px-3 mb-4" id="maxPrice" min={parseInt(minValue) + 1} max="2000" onChange={e => handleChange(e, setMaxValue)} value={maxValue} />
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <label className="form-label">
                                                    Estado:
                                                </label>
                                                <div className="col-12">
                                                    {status.map((state, i) => <FormCheck mobile={true} CheckValue={state} key={i} />)}
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <label className="form-label">Idioma:</label>
                                                <div className="col-12">
                                                    {languages.map((language, i) => <FormCheck CheckValue={language} key={i} />)}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-none d-sm-none d-md-block">
                        <div className="card mx-3  sticky-top" style={{ boxShadow: "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)", top: "1rem" }}>
                            <div className="card-header">
                                Filtrar por:
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <label className="form-label">
                                        Precio:
                                    </label>
                                    <div className="col-12">
                                        <label hmtlFor="minPrice" className="form-label">Precio minimo: {minValue}</label>
                                        <Input type="range" className="form-range px-3 mb-4" id="minPrice" min="0" max={parseInt(maxValue) - 1} onChange={e => handleChange(e, setMinValue)} value={minValue} />
                                        <label hmtlFor="maxPrice" className="form-label">Precio maximo: {maxValue}</label>
                                        <Input type="range" className="form-range px-3 mb-4" id="maxPrice" min={parseInt(minValue) + 1} max="2000" onChange={e => handleChange(e, setMaxValue)} value={maxValue} />
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <label className="form-label">
                                        Estado:
                                    </label>
                                    <div className="col-12">
                                        {status.map((state, i) => <FormCheck CheckValue={state} key={i} />)}
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <label className="form-label">Idioma:</label>
                                    <div className="col-12">
                                        {languages.map((language, i) => <FormCheck CheckValue={language} key={i} />)}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8 card-group">
                        <div className="row">
                            {!isFetchingCards && cards.length > 0 && cards.map((card, i) => <Card card={card} key={i} />)}
                        </div>
                    </div>
                </div>
            </Div>
        </>
    )
}

export default List;