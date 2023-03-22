import { configureStore } from "@reduxjs/toolkit";

import cardReducer from "./reducers/card";
import sellerReducer from "./reducers/seller";

export default configureStore({
    reducer: {
        cardReducer,
        sellerReducer
    }
})