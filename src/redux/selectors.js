import { createSelector } from "@reduxjs/toolkit";

export const lastCardsSel = state => state.cardReducer.lastCards;
export const isFetchingLastCardsSel = state => state.cardReducer.isFetchingLastCards;
export const deluxeCardsSel = state => state.cardReducer.deluxeCards;
export const isFetchingDeluxeCardsSel = state => state.cardReducer.isFetchingDeluxeCards;
export const cardsSel = state => state.cardReducer.cards;
export const isFetchingCardsSel = state => state.cardReducer.isFetchingCards;
export const cardSel = state => state.cardReducer.cardInfo;
export const isFetchingCardSel = state => state.cardReducer.isFetchingCard;

export const isFetchingSellerInfoSel = state => state.sellerReducer.isFetchingSellerInfo;
export const sellerInfoSel = state => state.sellerReducer.sellerInfo;

export const cardsInfoSel = createSelector(
    lastCardsSel,
    deluxeCardsSel,
    cardsSel,
    (lastCards, deluxeCards, cards) => ({
        lastCards,
        deluxeCards,
        cards
    })
)
