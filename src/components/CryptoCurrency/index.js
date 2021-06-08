import PropTypes from 'prop-types';
import styles from './CryptoCurrency.module.css';
import mainStyle from '../../index.module.css';

const CryptoCurrency = ({
  symbol,
  name,
  currency,
  stockExchange,
  exchangeShortName,
}) => (
  <div className={styles.cryptoCurrencyCard}>
    <header>
      <p className={mainStyle.badge}>{name}</p>
      <p className={styles.cryptoCurrencyCard__symbol}>{symbol}</p>
    </header>

    <div className={styles.cryptoCurrencyCard__body}>
      <span>{currency}</span>
      <span>{stockExchange}</span>
      <span>{exchangeShortName}</span>
    </div>

    <footer>
      <button type="button">More...</button>
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
