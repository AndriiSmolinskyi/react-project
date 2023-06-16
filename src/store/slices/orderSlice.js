import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    items: [],
    source: 'Warsaw',
    destination: 'City, Street',
  },
  reducers: {
    setOrder: (state, action) => {
      state.items = action.payload.items;
      state.source = action.payload.source;
      state.destination = action.payload.destination;
    },
  },
});

export const { setOrder } = orderSlice.actions;
export default orderSlice.reducer;