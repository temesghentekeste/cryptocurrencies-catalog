import { configureStore } from '@reduxjs/toolkit';
import cryptocurrenciesReducer from './cryptocurrenciesSlice';
import cryptocurrencyQuoteReducer from './cryptoQuotesSlice';

export default configureStore({
  reducer: {
    cryptocurrencies: cryptocurrenciesReducer,
    cryptocurrencyQuote: cryptocurrencyQuoteReducer,
  },
});
