import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptocurrencyQuoteAsync } from '../../redux/cryptoQuotesSlice';

const CruyptoQuote = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const cryptoQuote = useSelector((state) => state.cryptocurrencyquote);

  useEffect(() => {
    dispatch(getCryptocurrencyQuoteAsync(id));
  }, [dispatch]);

  console.log(cryptoQuote);

  return (
    cryptoQuote && (
      <div>
        <h1>
          CruyptoQuote: **
          {cryptoQuote[0].name}
          ** :: **
          {id}
          **
        </h1>
      </div>
    )
  );
};

export default CruyptoQuote;
