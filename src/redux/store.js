import { configureStore } from '@reduxjs/toolkit';
import cryptocurrenciesReducer from './cryptocurrenciesSlice';

export default configureStore({
  reducer: {
    cryptocurrencies: cryptocurrenciesReducer,
  },
});
