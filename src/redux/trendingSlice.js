/* eslint-disable no-unused-vars */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { trendingCryptosURL } from '../APIEndPoints';

const initialState = [];

export const getTrendingCryptosAsync = createAsyncThunk(
  'cryptocurrencies/getTrendingCryptosAsync',
  async () => {
    const response = await fetch(trendingCryptosURL);
    if (response.ok) {
      const cryptos = await response.json();
      return cryptos;
    }
    return new Error('Unable to fetch data.');
  },
);

const trendingSlice = createSlice({
  name: 'cryptocurrencies',
  initialState,

  extraReducers: {
    [getTrendingCryptosAsync.fulfilled]: (state, action) => action.payload,
  },
});

export default trendingSlice.reducer;
