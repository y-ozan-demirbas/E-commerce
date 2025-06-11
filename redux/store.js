import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './features/imagesSlice';

export const store = configureStore({
  reducer: {
    images: imagesReducer,
  },
});