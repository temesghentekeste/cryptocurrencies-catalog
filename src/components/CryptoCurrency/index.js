import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CryptoCurrency.module.css';
import mainStyle from '../../index.module.css';

const CryptoCurrency = ({
  id, symbol, name, price, image,
}) => (
  <Link to={`/cryptoquote/${id}`}>
    <div className={styles.cryptoCurrencyCard} data-testid="cryptocurrency">
      <header data-testid="cryptocurrency-header">
        <p className={mainStyle.badge} data-testid="cryptocurrency-name">
          {name}
        </p>
        <p
          className={styles.cryptoCurrencyCard__symbol}
          data-testid="cryptocurrency-symbol"
        >
          {symbol}
        </p>
      </header>

      <div className={styles.cryptoCurrencyCard__body}>
        <span data-testid="cryptocurrency-price">
          Price: $
          {price}
        </span>
        <img src={image} alt={name} />
      </div>

      <footer>
        <button type="button">More...</button>
      </footer>
    </div>
  </Link>
);

CryptoCurrency.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default CryptoCurrency;
