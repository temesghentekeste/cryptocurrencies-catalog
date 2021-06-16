import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ handleFilter }) => {
  const [keyword, setKeyword] = useState();

  useEffect(() => {
    handleFilter(keyword);
  }, [keyword]);

  return (
    <>
      <form className={styles.searchForm}>
        <input
          type="text"
          name="keyword"
          placeholder="Search for something. Ex. iExec, Bitcoin, DOGEUSD..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
    </>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
