/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable comma-dangle */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { allCryptosURL } from '../APIEndPoints';

const initialState = {
  loading: null,
  cryptoCurrencies: [],
};

export const getCryptocurrenciesAsync = createAsyncThunk(
  'cryptocurrencies/getCryptocurrenciesAsync',
  async () => {
    const response = await fetch(allCryptosURL);
    const cryptos = await response.json();
    return cryptos;
  }
);

const cryptocurrenciesSlice = createSlice({
  name: 'cryptocurrencies',
  initialState,
  reducers: {
    filterCryptocurrencies: (state, action) => state.filter(
      (crypto) => crypto.name.toLowerCase().includes(action.payload.toLowerCase())
          || crypto.symbol.toLowerCase().includes(action.payload.toLowerCase())
    ),
  },
  extraReducers: {
    [getCryptocurrenciesAsync.pending]: (state, action) => {
      state.loading = 'loading';
      state.cryptoCurrencies = [];
    },
    [getCryptocurrenciesAsync.fulfilled]: (state, action) => {
      state.loading = null;
      state.cryptoCurrencies = action.payload;
    },
  },
});

export const { filterCryptocurrencies } = cryptocurrenciesSlice.actions;

export default cryptocurrenciesSlice.reducer;
