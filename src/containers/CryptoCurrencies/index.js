/* eslint-disable import/no-useless-path-segments */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import CryptoCurrency from '../../components/CryptoCurrency/';
import styles from './CryptoCurrencies.module.css';

const CryptoCurrencies = ({ cryptoCurrencies }) => {
  console.log('CryptoCurrencies', cryptoCurrencies);

  return (
    <div className={styles.availableCryptocurrencies}>
      {cryptoCurrencies
        && cryptoCurrencies.map((crypto) => {
          const {
            symbol, name, currency, stockExchange, exchangeShortName,
          } = crypto;
          return (
            <CryptoCurrency
              key={symbol}
              symbol={symbol}
              name={name}
              currency={currency}
              stockExchange={stockExchange}
              exchangeShortName={exchangeShortName}
            />
          );
        })}
    </div>
  );
};

CryptoCurrencies.propTypes = {
  cryptoCurrencies: PropTypes.array.isRequired,
};

export default CryptoCurrencies;
