/* eslint-disable react/forbid-prop-types */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable  comma-dangle */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { WaveLoading } from 'react-loadingg';
import ErrorAlert from '../Error/Error';

import { getCryptocurrenciesAsync } from '../../redux/cryptocurrenciesSlice';
import CryptoCurrency from '../CryptoCurrency/CryptoCurrency';
import styles from './CryptoCurrencies.module.css';

const CryptoCurrencies = () => {
  const dispatch = useDispatch();
  const { loading, cryptoCurrencies, filter } = useSelector(
    (state) => state.cryptocurrencies
  );

  console.log('Filter:', filter);

  useEffect(() => {
    dispatch(getCryptocurrenciesAsync());
  }, [dispatch]);

  if (loading || loading === null || loading === undefined) {
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

export default CryptoCurrencies;
