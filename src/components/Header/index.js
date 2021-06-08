import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Header.module.css';

const Header = ({ handleFilter }) => {
  const [keyword, setKeyword] = useState('');

  const handleClick = () => {
    handleFilter(keyword);
  };

  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>Cryptocurrencies</h1>
      </Link>
      <input
        type="text"
        placeholder="Search for something. Ex. iExec, Bitcoin, DOGEUSD..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="button" onClick={handleClick}>
        Search
      </button>
    </header>
  );
};

Header.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Header;
