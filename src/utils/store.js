import { configureStore } from "@reduxjs/toolkit";
import stepReducer from '../slices/stepSlice';

export const store = configureStore({
    reducer: {
        userStep: stepReducer
    }
})