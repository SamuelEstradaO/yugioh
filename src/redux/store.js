import { configureStore } from "@reduxjs/toolkit";

import cardReducer from "./reducers/card";

export default configureStore({
    reducer: {
        cardReducer
    }
})