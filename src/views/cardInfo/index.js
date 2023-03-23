import { useLocation } from "react-router-dom";
import { BgDiv } from "../../theme";
import BreadCrumb from "../components/BreadCrumb";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchCard } from "../../redux/actions/card";
import { cardSel, isFetchingCardSel, isFetchingSellerInfoSel, sellerInfoSel } from "../../redux/selectors";
import { fetchSeller } from "../../redux/actions/seller";
import styled from "styled-components";
import Details from "./components/Details";
import SellerOption from "./components/SellerOption";

const Div = styled.div`
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    border-radius: 0.5rem;
`

const CardInfo = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const queryParams = new URLSearchParams(location.search);
    const cardId = queryParams.get("cardId");
    const [sellers, setSellers] = useState([]);
    const cardInfo = useSelector(cardSel, shallowEqual);
    const isFetchingCard = useSelector(isFetchingCardSel, shallowEqual);
    const sellerInfo = useSelector(sellerInfoSel, shallowEqual);
    const isFetchingSellerInfo = useSelector(isFetchingSellerInfoSel, shallowEqual);
    useEffect(() => {
        dispatch(fetchCard(cardId));
    }, [cardId]);

    useEffect(() => {
        console.log(cardInfo.hasOwnProperty("id"));
        cardInfo.hasOwnProperty("id") && dispatch(fetchSeller(cardInfo.id));
    }, [cardInfo]);
    useEffect(() => {
        if (sellerInfo.hasOwnProperty("user") && cardInfo.hasOwnProperty("sellers")) {
            const sellersComponents = [];
            for (let i = 0; i < cardInfo.sellers; i++) {
                sellersComponents.push(<SellerOption sellerInfo={sellerInfo} key={i} />)
            }
            setSellers(sellersComponents)
        }
    }, [sellerInfo, cardInfo])
    return (
        <BgDiv className="col-12 container g-0">
            <div className="col-12 row mx-0">
                <BreadCrumb />
                <div className="col-12 col-md-7 row px-3 g-0" style={{ height: "fit-content" }}>
                    <div className="col-12 row">
                        <div className="col-12 col-md-8 d-flex justify-content-start align-content-center h-auto" style={{ height: "fit-content" }}>
                            <h1 className="m-0 text-uppercase" style={{ height: "fit-content" }}>{cardInfo.card}</h1>
                        </div>
                        <div className="d-none d-md-flex col-md-4 align-content-center flex-wrap justify-content-end">
                            <p className="m-0" >
                                {cardInfo.sellers} vendedores
                            </p>
                        </div>
                    </div>
                    <Div className="bg-danger-subtle col-12 d-flex justify-content-center py-3 my-3">
                        <img src={`/${cardInfo.image}`} alt={cardInfo.card} className="img-fluid" width={232} />
                    </Div>
                    <Details cardInfo={cardInfo} />
                    <Div className="card col-12 my-3">
                        <div className="card-body">
                            <h5 className="card-title">
                                Descripción de la carta
                            </h5>
                            <p className="card-text justify">
                                {cardInfo.description}
                            </p>
                        </div>
                    </Div>
                </div>
                <div className="col-12 col-md-5 px-3">
                    <p className="col-12 d-block d-md-none text-center mt-3 mb-1">
                        {cardInfo.sellers} vendedores
                    </p>
                    {sellers.map(seller => seller)}
                </div>
            </div>
        </BgDiv>
    )
};
export default CardInfo;