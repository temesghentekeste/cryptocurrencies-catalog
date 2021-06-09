import { configureStore } from '@reduxjs/toolkit';
import cryptocurrenciesReducer from './cryptocurrenciesSlice';
import cryptocurrencyQuoteReducer from './cryptoQuotesSlice';
import cryptocurrencyTrendingReducer from './trendingSlice';

export default configureStore({
  reducer: {
    cryptocurrencies: cryptocurrenciesReducer,
    cryptocurrencyquote: cryptocurrencyQuoteReducer,
    trendingcryptocurrencies: cryptocurrencyTrendingReducer,
  },
});
