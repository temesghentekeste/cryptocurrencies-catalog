import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header} data-testid="header">
    <div className={styles.header__right}>
      <Link to="/">
        <h1>Cryptocurrencies</h1>
      </Link>

      <Link to="/trending">
        <h3>Trending Dashboard</h3>
      </Link>
    </div>
  </header>
);

export default Header;
