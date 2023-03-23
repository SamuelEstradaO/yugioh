import { createAction } from "@reduxjs/toolkit";
import { sellerInfo, data as cardData } from "../../data/Data";


export const startFetchingSeller = createAction("START_FETCHING_SELLER");
export const successFetchingSeller = createAction("SUCCESS_FETCHING_SELLER");

export const fetchSeller = (cardId) => (dispatch) => {
    dispatch(startFetchingSeller());
    const { image = null } = cardData.find(card => card.id === parseInt(cardId))
    const data = { ...sellerInfo, cardPic: image };
    dispatch(successFetchingSeller({ data }));
}