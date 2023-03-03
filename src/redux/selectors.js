import { createSelector } from "@reduxjs/toolkit";

export const lastCardsSel = state => state.cardReducer.lastCards;
export const isFetchingLastCardsSel = state => state.cardReducer.isFetchingLastCards;
export const deluxeCardsSel = state => state.cardReducer.deluxeCards;
export const isFetchingDeluxeCardsSel = state => state.cardReducer.isFetchingDeluxeCards;
