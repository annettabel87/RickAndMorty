import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mainStateType, IRickAndMortyData } from '../../type/type';

export const initialState: mainStateType = {
  data: [],
  searchValue: '',
  cardsCount: '20',
  page: 1,
  pages: 0,
  sortValue: '',
  selectCard: {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
      name: '',
      url: '',
    },
    location: {
      name: '',
      url: '',
    },
    image: '',
    episode: [],
    url: '',
    created: '',
  },
  isLoading: false,
  error: '',
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    DATA_FETCHING(state) {
      state.isLoading = true;
    },
    DATA_FETCHING_SUCCESS(state, action: PayloadAction<IRickAndMortyData[]>) {
      state.isLoading = false;
      state.error = '';
      state.data = action.payload;
    },
    DATA_FETCHING_ERROR(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      state.data = [];
    },
    SEARCH(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    SELECT_CARD(state, action: PayloadAction<IRickAndMortyData>) {
      state.selectCard = action.payload;
    },
    SELECT_COUNT_CARDS(state, action: PayloadAction<string>) {
      state.cardsCount = action.payload;
    },
    SET_PAGE(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    SET_PAGES(state, action: PayloadAction<number>) {
      state.pages = action.payload;
    },
    SET_SORT(state, action: PayloadAction<string>) {
      state.sortValue = action.payload;
    },
  },
  extraReducers: {},
});
export const { SEARCH, SELECT_CARD, SELECT_COUNT_CARDS, SET_PAGE, SET_SORT } = mainSlice.actions;
export default mainSlice.reducer;
