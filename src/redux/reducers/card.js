import { createReducer } from "@reduxjs/toolkit";

import {
    startFetchingLastCards,
    startFetchingDeluxeCards,
    successFetchingDeluxeCards,
    successFetchingLastCards,
    startFetchingCards,
    successFetchingCards,
    startFetchingCard,
    successFetchingCard
} from "../actions/card";

const initialState = {
    lastCards: [],
    isFetchingLastCards: false,
    cardInfo: {},
    isFetchingCard: false,
    isFetchingDeluxeCards: false,
    deluxeCards: [],
    isFetchingCards: [],
    cards: [],

};

const cardReducer = createReducer(initialState, builder => {
    builder
        .addCase(startFetchingCards.toString(), (state, action) => {
            return {
                ...state,
                isFetchingCards: true,
                cards: []
            }
        })
        .addCase(successFetchingCards.toString(), (state, action) => {
            return {
                ...state,
                isFetchingCards: false,
                cards: action.payload.cardsData
            }
        })
        .addCase(startFetchingCard.toString(), (state, action) => {
            return {
                ...state,
                isFetchingCard: true,
                cardInfo: {}
            }
        })
        .addCase(successFetchingCard.toString(), (state, action) => {
            return {
                ...state,
                isFetchingCard: false,
                cardInfo: action.payload.cardData
            }
        })
        .addCase(startFetchingLastCards.toString(), (state, action) => {
            return {
                ...state,
                isFetchingLastCards: true,
                lastCards: []
            }
        })
        .addCase(successFetchingLastCards.toString(), (state, action) => {
            return {
                ...state,
                isFetchingLastCards: false,
                lastCards: action.payload.lastCards
            }
        })
        .addCase(startFetchingDeluxeCards.toString(), (state, action) => {
            return {
                ...state,
                isFetchingDeluxeCards: true,
                deluxeCards: []
            }
        })
        .addCase(successFetchingDeluxeCards.toString(), (state, action) => {
            return {
                ...state,
                isFetchingDeluxeCards: false,
                deluxeCards: action.payload.deluxeCards,
            }
        })
        .addDefaultCase((state, action) => {
            return state
        });
});

export default cardReducer;