import PropTypes from 'prop-types';

const CryptoCurrency = ({
  symbol,
  name,
  currency,
  stockExchange,
  exchangeShortName,
}) => (
  <div className="cryptoCurrency">
    <header>
      <p>{name}</p>
      <p className="cryptoCurrency__symbol">{symbol}</p>
    </header>

    <footer>
      <span>{currency}</span>
      <span>{stockExchange}</span>
      <span>{exchangeShortName}</span>
    </footer>
  </div>
);

CryptoCurrency.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  stockExchange: PropTypes.string.isRequired,
  exchangeShortName: PropTypes.string.isRequired,
};
export default CryptoCurrency;
