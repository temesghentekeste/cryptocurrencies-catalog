import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptocurrenciesAsync } from '../redux/cryptocurrenciesSlice';

const CryptoCurrencies = () => {
  const dispatch = useDispatch();

  const cryptoCurrencies = useSelector((state) => state.cryptocurrencies);

  useEffect(() => {
    dispatch(getCryptocurrenciesAsync());
  }, [dispatch]);

  console.log(cryptoCurrencies);
  return <div>List of CryptoCurrencies</div>;
};

export default CryptoCurrencies;
