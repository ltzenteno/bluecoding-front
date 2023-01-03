import { configureStore } from '@reduxjs/toolkit';
import customReducer from './../slices/customSlice';

export const store = configureStore({
  reducer: {
    // add reducers
    custom: customReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
