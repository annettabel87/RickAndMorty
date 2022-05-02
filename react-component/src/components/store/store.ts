import { combineReducers, configureStore } from '@reduxjs/toolkit';
import formReducer from './formReducer';
import mainReducer from './mainReducer';

export const rootReducer = combineReducers({
  formReducer,
  mainReducer,
});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};
