/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const getCryptocurrenciesAsync = createAsyncThunk(
  'cryptocurrencies/getCryptocurrenciesAsync',
  async () => {
    const response = await fetch(
      'https://financialmodelingprep.com/api/v3/symbol/available-cryptocurrencies?apikey=58d955954a10a314214a86f3d3bd4fb3',
    );
    if (response.ok) {
      const cryptos = await response.json();
      return cryptos;
    }
    return new Error('Unable to fetch data.');
  },
);

const cryptocurrenciesSlice = createSlice({
  name: 'cryptocurrencies',
  initialState,
  extraReducers: {
    [getCryptocurrenciesAsync.fulfilled]: (state, action) => action.payload,
  },
});

export const { getCryptocurrencies } = cryptocurrenciesSlice.actions;

export default cryptocurrenciesSlice.reducer;
