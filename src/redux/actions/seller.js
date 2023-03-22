import { createAction } from "@reduxjs/toolkit";
import { sellerInfo } from "../../data/Data";


export const startFetchingSeller = createAction("START_FETCHING_SELLER");
export const successFetchingSeller = createAction("SUCCESS_FETCHING_SELLER");

export const fetchSeller = () => (dispatch) => {
    dispatch(startFetchingSeller());
    const data = sellerInfo;
    dispatch(successFetchingSeller({ data }));
}