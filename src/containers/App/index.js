/* eslint-disable import/no-useless-path-segments */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.css';
import CryptoCurrencies from '../../components/CryptoCurrencies';
import {
  filterCryptocurrencies,
  getCryptocurrenciesAsync,
} from '../../redux/cryptocurrenciesSlice';
import Header from '../../components/Header';
import NotFound from '../../components/NotFound';
import CryptoQuote from '../CryptoQuote';

function App() {
  const [filteredCryptos, setfilteredCryptos] = useState([]);
  const [input, setInput] = useState(['']);
  const dispatch = useDispatch();

  const cryptoCurrencies = useSelector((state) => state.cryptocurrencies);

  const handleFilter = (keyword) => {
    console.log(keyword);

    setInput(keyword);

    setfilteredCryptos(
      cryptoCurrencies.filter(
        (crypto) => crypto.name.toLowerCase().includes(keyword)
          || crypto.symbol.toLowerCase().includes(keyword),
      ),
    );

    if (!filteredCryptos || !input) {
      setfilteredCryptos(cryptoCurrencies);
    }
    console.log('App: all', cryptoCurrencies);
    console.log('App: filtered', filteredCryptos);
  };

  useEffect(() => {
    dispatch(getCryptocurrenciesAsync());
  }, [dispatch]);

  useEffect(() => {
    setfilteredCryptos(cryptoCurrencies);
  }, [filterCryptocurrencies]);

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
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
