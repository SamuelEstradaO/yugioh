import { createAction } from "@reduxjs/toolkit";

import { data, cardData as cardInfo } from "../../data/Data";

export const startFetchingLastCards = createAction("START_FETCHING_LAST_CARDS");
export const successFetchingLastCards = createAction("SUCCESS_FETCHING_LAST_CARDS");
export const startFetchingDeluxeCards = createAction("START_FETCHING_DELUXE_CARDS");
export const successFetchingDeluxeCards = createAction("SUCCESS_FETCHING_DELUXE_CARDS");
export const startFetchingCards = createAction("START_FETCHING_CARDS");
export const successFetchingCards = createAction("SUCCESS_FETCHING_CARDS");
export const startFetchingCard = createAction("START_FETCHING_CARD");
export const successFetchingCard = createAction("SUCCESS_FETCHING_CARD");

export const fetchCards = () => (dispatch) => {
    dispatch(startFetchingCards());
    const cardsData = data;
    dispatch(successFetchingCards({ cardsData }));
}
export const fetchRecentCards = () => (dispatch) => {
    dispatch(startFetchingLastCards());
    const lastCards = data.slice(-12);
    dispatch(successFetchingLastCards({ lastCards }));
}
export const fetchDeluxeCards = () => (dispatch) => {
    dispatch(startFetchingDeluxeCards());
    const deluxeCards = data.filter(card => card.deluxe === true);
    dispatch(successFetchingDeluxeCards({ deluxeCards }));
}
export const fetchCard = (id) => (dispatch) => {
    dispatch(startFetchingCard());
    const card = data.find(item => item.id === parseInt(id));
    const cardData = { ...cardInfo, ...card };
    dispatch(successFetchingCard({ cardData }));
}