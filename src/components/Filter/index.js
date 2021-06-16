import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ handleFilter }) => {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = () => {
    handleFilter(keyword);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="keyword"
          placeholder="Search for something. Ex. iExec, Bitcoin, DOGEUSD..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" className={styles.btnSubmit} />
      </form>
    </>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
