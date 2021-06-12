/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './App.module.css';
import {
  filterCryptocurrencies,
  getCryptocurrenciesAsync,
} from '../../redux/cryptocurrenciesSlice';
import Header from '../../components/Header/Header';
import NotFound from '../../components/NotFound/NotFound';
import Trending from '../Trending/Trending';
import Footer from '../../components/Footer/Footer';
import CryptoCurrencies from '../../components/CryptoCurrencies/CryptoCurrencies';
import CryptoQuote from '../CryptoQuote/CryptoQuote';

function App() {
  const [filteredCryptos, setfilteredCryptos] = useState([]);
  const [input, setInput] = useState(['']);
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.cryptocurrencies.loading);
  const cryptoCurrencies = useSelector(
    (state) => state.cryptocurrencies.cryptoCurrencies
  );

  const handleFilter = (keyword) => {
    setInput(keyword);

    setfilteredCryptos(
      cryptoCurrencies.filter(
        (crypto) =>
          crypto.name.toLowerCase().includes(keyword) ||
          crypto.symbol.toLowerCase().includes(keyword)
      )
    );

    if (!filteredCryptos || !input) {
      setfilteredCryptos(cryptoCurrencies);
    }
  };

  useEffect(async () => {
    const response = await dispatch(getCryptocurrenciesAsync());
    setfilteredCryptos(await response.payload);
  }, []);

  useEffect(() => {
    dispatch(getCryptocurrenciesAsync());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Router>
        <Header handleFilter={handleFilter} />
        <Switch>
          <Route path="/" exact>
            <CryptoCurrencies
              cryptoCurrencies={filteredCryptos}
              loading={loading}
            />
          </Route>
          <Route path="/cryptoquote/:id">
            <CryptoQuote />
          </Route>

          <Route path="/trending">
            <Trending />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
