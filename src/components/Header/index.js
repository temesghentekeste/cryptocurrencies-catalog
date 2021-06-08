import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Link to="/">
      <h1>Cryptocurrencies</h1>
    </Link>
  </header>
);

export default Header;
