/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable comma-dangle */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { specificCryptoURL } from '../APIEndPoints';

const initialState = {
  loading: 'loading',
  cryptoQuote: null,
};

export const getCryptocurrencyQuoteAsync = createAsyncThunk(
  'cryptocurrencies/getCryptocurrencyQuoteAsync',
  async (key) => {
    const response = await fetch(
      `${specificCryptoURL}/${key}?apikey=e708af923b22da2b8687e0d8e1255fb6`
    );
    const cryptoQuote = await response.json();
    return cryptoQuote;
  }
);

const cryptocurrencyQuoteSlice = createSlice({
  name: 'cryptocurrencyQuote',
  initialState,

  extraReducers: {
    [getCryptocurrencyQuoteAsync.pending]: (state, action) => {
      state.loading = 'loading';
      state.cryptoQuote = null;
    },

    [getCryptocurrencyQuoteAsync.fulfilled]: (state, action) => {
      state.loading = null;
      state.cryptoQuote = action.payload;
    },
  },
});

export default cryptocurrencyQuoteSlice.reducer;
