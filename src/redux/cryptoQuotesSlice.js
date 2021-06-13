/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable comma-dangle */
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { specificCryptoURL } from '../APIEndPoints';

const initialState = {
  loading: true,
  cryptoQuote: null,
};

export const getCryptocurrencyQuoteAsync = createAsyncThunk(
  'cryptocurrencies/getCryptocurrencyQuoteAsync',
  async (key) => {
    const response = await axios.get(
      `${specificCryptoURL}/${key}?apikey=e708af923b22da2b8687e0d8e1255fb6`
    );
    const cryptoQuote = await response.data;
    return cryptoQuote;
  }
);

const cryptocurrencyQuoteSlice = createSlice({
  name: 'cryptocurrencyQuote',
  initialState,

  extraReducers: {
    [getCryptocurrencyQuoteAsync.pending]: (state, action) => {
      state.loading = true;
      state.cryptoQuote = null;
    },

    [getCryptocurrencyQuoteAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.cryptoQuote = action.payload;
    },
  },
});

export default cryptocurrencyQuoteSlice.reducer;
