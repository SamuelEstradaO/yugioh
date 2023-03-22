import { useLocation } from "react-router-dom";
import { BgDiv } from "../../theme";
import BreadCrumb from "../components/BreadCrumb";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchCard } from "../../redux/actions/card";
import { cardSel, isFetchingCardSel, isFetchingSellerInfoSel, sellerInfoSel } from "../../redux/selectors";
import { fetchSeller } from "../../redux/actions/seller";

const CardInfo = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const queryParams = new URLSearchParams(location.search);
    const cardId = queryParams.get("cardId");
    console.log(cardId);
    const cardInfo = useSelector(cardSel, shallowEqual);
    const isFetchingCard = useSelector(isFetchingCardSel, shallowEqual);
    const sellerInfo = useSelector(sellerInfoSel, shallowEqual);
    const isFetchingSellerInfo = useSelector(isFetchingSellerInfoSel, shallowEqual);
    useEffect(() => {
        dispatch(fetchCard(cardId));
    }, [cardId]);

    useEffect(() => {
        console.log(cardInfo.hasOwnProperty("id"));
        cardInfo.hasOwnProperty("id") && dispatch(fetchSeller());
    }, [cardInfo]);
    return (
        <BgDiv className="col-lg-12 col-sm-12 container-fluid">
            <BreadCrumb />
            <div className="col-12 col-md-7 row">
                <div className="col-12 col-md-8">
                    <h1>{cardInfo.card}</h1>
                </div>
            </div>
        </BgDiv>
    )
};
export default CardInfo;