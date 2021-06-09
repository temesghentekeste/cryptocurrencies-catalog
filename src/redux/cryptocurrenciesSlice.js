/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const getCryptocurrenciesAsync = createAsyncThunk(
  'cryptocurrencies/getCryptocurrenciesAsync',
  async () => {
    const response = await fetch(
      'https://financialmodelingprep.com/api/v3/symbol/available-cryptocurrencies?apikey=e708af923b22da2b8687e0d8e1255fb6',
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
  reducers: {
    filterCryptocurrencies: (state, action) => {
      console.log('payload', action.payload);
      console.log('State', state);
      return state.filter(
        (crypto) => crypto.name.toLowerCase().includes(action.payload.toLowerCase())
          || crypto.symbol.toLowerCase().includes(action.payload.toLowerCase()),
      );
    },
  },
  extraReducers: {
    [getCryptocurrenciesAsync.fulfilled]: (state, action) => action.payload,
  },
});

export const { filterCryptocurrencies } = cryptocurrenciesSlice.actions;

export default cryptocurrenciesSlice.reducer;
