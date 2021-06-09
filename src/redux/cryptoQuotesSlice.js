/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const getCryptocurrencyQuoteAsync = createAsyncThunk(
  'cryptocurrencies/getCryptocurrencyQuoteAsync',
  async (key) => {
    const response = await fetch(
      `https://financialmodelingprep.com/api/v3/quote/${key}?apikey=e708af923b22da2b8687e0d8e1255fb6`,
    );
    if (response.ok) {
      const cryptoQuote = await response.json();
      return cryptoQuote;
    }
    return new Error('Unable to fetch data.');
  },
);

const cryptocurrencyQuoteSlice = createSlice({
  name: 'cryptocurrencyQuote',
  initialState,

  extraReducers: {
    [getCryptocurrencyQuoteAsync.fulfilled]: (state, action) => action.payload,
  },
});

export default cryptocurrencyQuoteSlice.reducer;
