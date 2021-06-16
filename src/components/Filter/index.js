import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Filter = ({ handleFilter }) => {
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    handleFilter(keyword);
  }, [keyword]);

  return (
    <>
      <form>
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
