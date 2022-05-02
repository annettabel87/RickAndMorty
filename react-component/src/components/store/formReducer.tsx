import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormCard } from '../FormPage/Form/Form';

export type FormStateType = {
  data: IFormCard[];
};
export const initialState: FormStateType = {
  data: [],
};

export interface FormStateAction {
  type: string;
  payload: IFormCard;
}
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
