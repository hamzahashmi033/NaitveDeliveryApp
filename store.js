import { configureStore } from "@reduxjs/toolkit";
// import { basketSlice } from "./redux/basket";
import baskerReducer from "./redux/basket"
import RestaurantReducer from "./redux/restaurantSlice";

export const store = configureStore({
    reducer:{
        basketReducer:baskerReducer,
        restaurantReducer : RestaurantReducer
    }
})