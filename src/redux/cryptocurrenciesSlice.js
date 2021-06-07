import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    symbol: 'RLCUSD',
    name: 'iExec RLC USD',
    currency: 'USD',
    stockExchange: 'CCC',
    exchangeShortName: 'CRYPTO',
  },

  {
    id: 1,
    symbol: 'RLCUSD',
    name: 'iExec RLC USD',
    currency: 'USD',
    stockExchange: 'CCC',
    exchangeShortName: 'CRYPTO',
  },

  {
    id: 2,
    symbol: 'RLCUSD',
    name: 'iExec RLC USD',
    currency: 'USD',
    stockExchange: 'CCC',
    exchangeShortName: 'CRYPTO',
  },

  {
    id: 3,
    symbol: 'RLCUSD',
    name: 'iExec RLC USD',
    currency: 'USD',
    stockExchange: 'CCC',
    exchangeShortName: 'CRYPTO',
  },
  {
    id: 4,
    symbol: 'RLCUSD',
    name: 'iExec RLC USD',
    currency: 'USD',
    stockExchange: 'CCC',
    exchangeShortName: 'CRYPTO',
  },
];

const cryptocurrenciesSlice = createSlice({
  name: cryptosCurrencies,
  initialState,
  reducers: {
    getCryptocurrencies: (state, action) => {
      return state;
    },
  },
});

export const { getCryptocurrencies } = cryptocurrenciesSlice.actions;

export default cryptocurrenciesSlice.reducer;
