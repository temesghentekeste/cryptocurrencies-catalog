/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import { getCryptocurrencyQuoteAsync } from '../../redux/cryptoQuotesSlice';

import styles from './CryptoQuote.module.css';
import mainStyles from '../../index.module.css';

const CruyptoQuote = () => {
  const { window } = new JSDOM('');
  const DOMPurify = createDOMPurify(window);
  const { id } = useParams();
  const dispatch = useDispatch();

  const cryptoQuote = useSelector((state) => state.cryptocurrencyquote);
  useEffect(() => {
    dispatch(getCryptocurrencyQuoteAsync(id));
  }, [dispatch]);

  console.log('cryptoQuote: ', cryptoQuote);
  return (
    cryptoQuote && (
      <>
        <div className={styles.cryptoQuote}>
          <div className={styles.cryptoQuote__description}>
            <h2>{cryptoQuote.name}</h2>
            <p>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(cryptoQuote.description.en),
                }}
              />
            </p>
          </div>
          <div className={styles.cryptoQuote__Card}>
            <header>
              <h2>{cryptoQuote.name}</h2>
              <h2>{cryptoQuote.symbol}</h2>
              <h2>
                ${cryptoQuote.market_data.current_price.usd.toLocaleString()}
              </h2>
            </header>

            <div className={styles.cryptoQuote__stats}>
              <div className={styles.cryptoQuote__stats__lowHigh}>
                <span>Day Low: ${cryptoQuote.market_data.low_24h.usd}</span>
                <span>Day High: ${cryptoQuote.market_data.high_24h.usd}</span>

                <span>
                  Price change % (in 1 hour):{' '}
                  {cryptoQuote.market_data.price_change_percentage_24h}%
                </span>
              </div>

              <div className={styles.cryptoQuote__stats__price}>
                <p>
                  Market Cap:{' '}
                  <span>
                    ${cryptoQuote.market_data.market_cap.usd.toLocaleString()}
                  </span>
                </p>

                <p>
                  Market Cap Rank: <span>{cryptoQuote.market_cap_rank}</span>
                </p>
                <p>
                  Developer Score: <span>{cryptoQuote.developer_score}</span>
                </p>
                <p>
                  Community Score: <span>{cryptoQuote.community_score}</span>
                </p>
                <p>
                  Liquidity Score: <span>{cryptoQuote.liquidity_score}</span>
                </p>
                <p>
                  Public Interest Score:{' '}
                  <span>{cryptoQuote.public_interest_score}</span>
                </p>
              </div>
            </div>

            <footer>
              <span>Converted volume </span>
              <span>btc: {cryptoQuote.tickers[0].converted_volume.btc}</span>
              <span>eth: {cryptoQuote.tickers[0].converted_volume.eth}</span>
              <span>usd: {cryptoQuote.tickers[0].converted_volume.usd}</span>
            </footer>
          </div>
        </div>
        <div className={mainStyles.backLink}>
          <Link to="/">Go back to Home</Link>
        </div>
      </>
    )
  );
};

export default CruyptoQuote;
