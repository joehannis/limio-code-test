import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    value: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      state.value.push(action.payload);
    },
    clearBasket: (state) => {
      state.value = [];
    },
    deleteFromBasket: (state, action) => {
      state.value = state.value.filter(
        (item) =>
          item.display_name__limio !== action.payload.display_name__limio
      );
    },
  },
});

export const { addToBasket, clearBasket, deleteFromBasket } =
  basketSlice.actions;
export default basketSlice.reducer;

// This file contains the Redux slice for the basket. It exports a slice with three actions: addToBasket, clearBasket, and deleteFromBasket. The reducer handles these actions by updating the state accordingly.
