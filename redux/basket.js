import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: []
}
export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeToBasket: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id)
            let newBasket = [...state.items]
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn("cant remove product as its not in your basket")
            }
            state.items = newBasket
        }
    }
})
export const selectBasketItems = (state) => state.items;
export const selectBasketItemsWihId = (state, id) => state.items.filter((item) => item.id === id)
export const totalPrice = (state) => state.items.reduce((total, items) => total += items.price, 0)

export const { addToBasket, removeToBasket } = basketSlice.actions
export default basketSlice.reducer