/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { allCryptosURL } from '../API/APIEndPoints';

const initialState = {
  loading: false,
  cryptoCurrencies: [],
  filter: '',
};

export const getCryptocurrenciesAsync = createAsyncThunk(
  'cryptocurrencies/getCryptocurrenciesAsync',
  async () => {
    const response = await axios.get(allCryptosURL);
    const cryptos = await response.data;
    return cryptos;
  },
);

const cryptocurrenciesSlice = createSlice({
  name: 'cryptocurrencies',
  initialState,
  reducers: {
    changeFilter: (state, action) => ({
      filter: action.payload,
      loading: state.loading,
      cryptoCurrencies: state.cryptoCurrencies,
    }),
  },
  extraReducers: {
    [getCryptocurrenciesAsync.pending]: (state, action) => {
      state.loading = true;
      state.cryptoCurrencies = [];
    },
    [getCryptocurrenciesAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.cryptoCurrencies = action.payload;
    },
  },
});

export const { changeFilter } = cryptocurrenciesSlice.actions;

export default cryptocurrenciesSlice.reducer;
