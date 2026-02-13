import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      const existItem = state.find(item => item.id === action.payload.id);
      if (existItem) {
        existItem.qty += 1; // direct mutate
      } else {
        state.push({ ...action.payload, qty: 1 }); // initialize qty
      }
    },
    RemoveItem: (state, action) => {
      return state.filter(item => item.id !== action.payload); // remove by id
    },
    IncreamentQty: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item) item.qty += 1;
    },
    DicreamentQty: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item) {
        if (item.qty > 1) {
          item.qty -= 1;
        } else {
          return state.filter(i => i.id !== action.payload); // remove if qty 1
        }
      }
    }
  }
});

export const { AddItem, RemoveItem, IncreamentQty, DicreamentQty } = CartSlice.actions;
export default CartSlice.reducer;