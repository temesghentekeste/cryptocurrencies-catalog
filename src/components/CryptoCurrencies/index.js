/* eslint-disable import/no-useless-path-segments */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import CryptoCurrency from '../CryptoCurrency';
import styles from './CryptoCurrencies.module.css';

const CryptoCurrencies = ({ cryptoCurrencies }) => {
  console.log('CryptoCurrencies', cryptoCurrencies);

  return (
    <div className={styles.availableCryptocurrencies}>
      {cryptoCurrencies
        && cryptoCurrencies.map((crypto) => {
          const {
            id, symbol, name, current_price: price, image,
          } = crypto;
          return (
            <CryptoCurrency
              key={id}
              symbol={symbol}
              name={name}
              price={price}
              image={image}
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
