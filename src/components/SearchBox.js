import React from 'react';
import './SearchBox.css'

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2 searcher'>
      <input
        className='pa3 ba bg-dark-gray'
        type='search'
        placeholder='Search Candidates...'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;