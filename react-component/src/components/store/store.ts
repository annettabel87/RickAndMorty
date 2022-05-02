import { combineReducers, configureStore } from '@reduxjs/toolkit';
import formReducer from './formReducer';
import mainReducer from './mainReducer';

const rootReducer = combineReducers({
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

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
