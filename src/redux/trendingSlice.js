/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable comma-dangle */

import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { trendingCryptosURL } from '../APIEndPoints';

const initialState = {
  loading: true,
  trending: [],
};

export const getTrendingCryptosAsync = createAsyncThunk(
  'cryptocurrencies/getTrendingCryptosAsync',
  async () => {
    const response = await axios.get(trendingCryptosURL);
    const cryptos = await response.data;
    return cryptos;
  }
);

const trendingSlice = createSlice({
  name: 'cryptocurrencies',
  initialState,

  extraReducers: {
    [getTrendingCryptosAsync.pending]: (state, action) => {
      state.loading = true;
    },

    [getTrendingCryptosAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.trending = action.payload;
    },
  },
});

export default trendingSlice.reducer;
