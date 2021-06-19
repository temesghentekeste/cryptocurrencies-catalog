import { configureStore } from '@reduxjs/toolkit';
import cryptocurrenciesReducer from '../redux/cryptocurrenciesSlice';
import cryptocurrencyQuoteReducer from '../redux/cryptoQuotesSlice';
import cryptocurrencyTrendingReducer from '../redux/trendingSlice';

export default configureStore({
  reducer: {
    cryptocurrencies: cryptocurrenciesReducer,
    cryptocurrencyquote: cryptocurrencyQuoteReducer,
    trendingcryptocurrencies: cryptocurrencyTrendingReducer,
  },
});
