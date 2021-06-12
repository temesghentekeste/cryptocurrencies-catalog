/* eslint-disable react/forbid-prop-types */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
import PropTypes from 'prop-types';
import { WaveLoading } from 'react-loadingg';
import ErrorAlert from '../Error/Error';

import CryptoCurrency from '../CryptoCurrency/CryptoCurrency';
import styles from './CryptoCurrencies.module.css';

const CryptoCurrencies = ({ cryptoCurrencies, loading }) => {
  if (loading) {
    return <WaveLoading />;
  }

  if (cryptoCurrencies && cryptoCurrencies.error) {
    return <ErrorAlert />;
  }
  return (
    <div
      className={styles.availableCryptocurrencies}
      data-testid="cryptocurrencies"
    >
      {cryptoCurrencies &&
        cryptoCurrencies.map((crypto) => {
          const { id, symbol, name, current_price: price, image } = crypto;
          return (
            <CryptoCurrency
              key={id}
              id={id}
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
  loading: PropTypes.string.isRequired,
};

export default CryptoCurrencies;
