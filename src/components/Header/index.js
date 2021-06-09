import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Header.module.css';

const Header = ({ handleFilter }) => {
  const [keyword, setKeyword] = useState('');

  const handleChange = (e) => {
    setKeyword(e.target.value);
    handleFilter(keyword);
  };

  const handleClick = () => {
    handleFilter(keyword);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__right}>
        <Link to="/">
          <h1>Cryptocurrencies</h1>
        </Link>

        <Link to="/dashboard">
          <h3>Dashboard</h3>
        </Link>
      </div>

      <div className={styles.header__search}>
        <input
          type="text"
          placeholder="Search for something. Ex. iExec, Bitcoin, DOGEUSD..."
          value={keyword}
          onChange={(e) => handleChange(e)}
        />
        <button type="button" onClick={handleClick}>
          Search
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Header;
