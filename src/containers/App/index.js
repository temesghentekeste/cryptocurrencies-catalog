/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { WaveLoading } from 'react-loadingg';

import styles from './App.module.css';
import CryptoCurrencies from '../../components/CryptoCurrencies';
import {
  filterCryptocurrencies,
  getCryptocurrenciesAsync,
} from '../../redux/cryptocurrenciesSlice';
import Header from '../../components/Header';
import NotFound from '../../components/NotFound';
import CryptoQuote from '../CryptoQuote';
import Trending from '../Trending';
import ErrorAlert from '../../components/Error';
import Footer from '../../components/Footer';

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
    setfilteredCryptos(cryptoCurrencies);
  }, [dispatch, filterCryptocurrencies]);

  if (loading) {
    return <WaveLoading />;
  }

  if (filteredCryptos && filteredCryptos.error) {
    return <ErrorAlert />;
  }

  return (
    <div className={styles.app}>
      <Router>
        <Header handleFilter={handleFilter} />
        <Switch>
          <Route path="/" exact>
            <CryptoCurrencies cryptoCurrencies={filteredCryptos} />
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
