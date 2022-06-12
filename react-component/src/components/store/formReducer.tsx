import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormStateType, IFormCard } from '../../type/type';

export const initialState: FormStateType = {
  data: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    ADD_CARD(state, action: PayloadAction<IFormCard>) {
      state.data = [...state.data, action.payload];
    },
  },
});
export const { ADD_CARD } = formSlice.actions;
export default formSlice.reducer;
