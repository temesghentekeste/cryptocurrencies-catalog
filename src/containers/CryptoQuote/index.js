/* eslint-disable react/jsx-one-expression-per-line */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptocurrencyQuoteAsync } from '../../redux/cryptoQuotesSlice';
import styles from './CryptoQuote.module.css';

const CruyptoQuote = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const cryptoQuote = useSelector((state) => state.cryptocurrencyquote);

  useEffect(() => {
    dispatch(getCryptocurrencyQuoteAsync(id));
  }, [dispatch]);

  console.log(cryptoQuote);

  return (
    cryptoQuote.length && (
      <div className={styles.cryptoQuoteCard}>
        <header>
          <h2>{cryptoQuote[0].name}</h2>
          <h2>{cryptoQuote[0].symbol}</h2>
          <h2>${cryptoQuote[0].price}</h2>
        </header>

        <div className={styles.cryptoQuote__stats}>
          <div className={styles.cryptoQuote__stats__dayLowHigh}>
            <span>Day Low: {cryptoQuote[0].dayLow}</span>
            <span>Day High: {cryptoQuote[0].dayLow}</span>
          </div>

          <div className="cryptoQuote__stats__yearLowHigh">
            <span>Year Low {cryptoQuote[0].yearLow}</span>
            <span>Year High {cryptoQuote[0].yearLow}</span>
          </div>

          <div className="cryptoQuote__stats__price">
            <span>Market Cap: {cryptoQuote[0].marketCap}</span>
            <span>Price (Average 50): {cryptoQuote[0].priceAvg50}</span>
            <span>Price (Average 200): {cryptoQuote[0].priceAvg200}</span>
            <span>Volume: {cryptoQuote[0].volume}</span>
            <span>Average Volume: {cryptoQuote[0].averageVolume}</span>
          </div>
        </div>

        <footer>
          <span>Exchange: {cryptoQuote[0].exchange}</span>
          <span>Shares Outstanding: {cryptoQuote[0].sharesOutstanding}</span>
          <span>Open: {cryptoQuote[0].open}</span>
          <span>Previous Close: {cryptoQuote[0].previousClose}</span>
        </footer>
      </div>
    )
  );
};

export default CruyptoQuote;
