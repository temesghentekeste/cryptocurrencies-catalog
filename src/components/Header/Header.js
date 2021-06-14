import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  const [keyword, setKeyword] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/');
  };

  return (
    <header className={styles.header} data-testid="header">
      <div className={styles.header__right}>
        <Link to="/">
          <h1>Cryptocurrencies</h1>
        </Link>

        <Link to="/trending">
          <h3>Trending Dashboard</h3>
        </Link>
      </div>
      <div className={styles.header__search}>
        <input
          type="text"
          name="keyword"
          placeholder="Search for something. Ex. iExec, Bitcoin, DOGEUSD..."
          value={keyword}
          onChange={(e) => handleChange(e)}
        />
        <form onSubmit={handleClick}>
          <input type="submit" value="Search" className={styles.btnSubmit} />
        </form>
      </div>
    </header>
  );
};

export default Header;
