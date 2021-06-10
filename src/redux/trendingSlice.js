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
    if (response.ok) {
      const cryptos = await response.json();
      return cryptos;
    }
    return new Error('Unable to fetch data.');
  }
);

const trendingSlice = createSlice({
  name: 'cryptocurrencies',
  initialState,

  extraReducers: {
    [getTrendingCryptosAsync.pending]: (state, action) => {
      state.loading = 'loading';
    },
    [getTrendingCryptosAsync.rejected]: (state, action) => {
      state.error = 'error';
      state.posts = state.posts.concat(action.payload);
    },
    [getTrendingCryptosAsync.fulfilled]: (state, action) => {
      state.loading = null;
      state.error = null;
      state.trending = action.payload;
    },
  },
});

export default trendingSlice.reducer;
