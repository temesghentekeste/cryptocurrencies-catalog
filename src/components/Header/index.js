import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Link to="/">
      <h1>Cryptocurrencies</h1>
    </Link>
    <input
      type="text"
      placeholder="Search for something. Ex. iExec, Bitcoin, DOGEUSD..."
    />
  </header>
);

export default Header;
