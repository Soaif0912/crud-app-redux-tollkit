import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../Features/UserSlice";

export const Store = configureStore({
    reducer:{
        users : userReducer,
    }
})