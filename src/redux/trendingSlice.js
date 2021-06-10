/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable comma-dangle */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { trendingCryptosURL } from '../APIEndPoints';

const initialState = {
  loading: null,
  error: null,
  trending: [],
};

export const getTrendingCryptosAsync = createAsyncThunk(
  'cryptocurrencies/getTrendingCryptosAsync',
  async () => {
    const response = await fetch(trendingCryptosURL);
    const cryptos = await response.json();
    return cryptos;
  }
);

const trendingSlice = createSlice({
  name: 'cryptocurrencies',
  initialState,

  extraReducers: {
    [getTrendingCryptosAsync.pending]: (state, action) => {
      console.log('Running loading...');
      state.loading = 'loading';
    },

    [getTrendingCryptosAsync.fulfilled]: (state, action) => {
      console.log('Running fulfilled...', action.payload);
      state.loading = null;

      if (action.payload === 'Error: Unable to fetch data.') {
        state.error = action.payload;
        state.trending = [];
      } else {
        state.error = null;
        state.trending = action.payload;
      }
    },
  },
});

export default trendingSlice.reducer;
