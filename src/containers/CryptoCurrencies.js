import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptocurrenciesAsync } from '../redux/cryptocurrenciesSlice';
import CryptoCurrency from './CryptoCurrency';

const CryptoCurrencies = () => {
  const dispatch = useDispatch();

  const cryptoCurrencies = useSelector((state) => state.cryptocurrencies);

  useEffect(() => {
    dispatch(getCryptocurrenciesAsync());
  }, [dispatch]);

  console.log(cryptoCurrencies);
  return (
    <div className="availableCryptocurrencies">
      {CryptoCurrencies.map((crypto) => {
        const {
          symbol, name, currency, stockExchange, exchangeShortName,
        } = crypto;
        return (
          <CryptoCurrency
            key={symbol}
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

export default CryptoCurrencies;
