import { createReducer } from "@reduxjs/toolkit";
import { startFetchingSeller, successFetchingSeller } from "../actions/seller";

const initialState = {
    sellerInfo: {},
    isFetchingSellerInfo: false
}

const sellerReducer = createReducer(initialState, builder => {
    builder
        .addCase(startFetchingSeller.toString(), (state, action) => {
            return {
                ...state,
                sellerInfo: {},
                isFetchingSellerInfo: true
            }
        })
        .addCase(successFetchingSeller.toString(), (state, action) => {
            return {
                ...state,
                sellerInfo: action.payload.data,
                isFetchingSellerInfo: false,
            }
        })
})

export default sellerReducer;