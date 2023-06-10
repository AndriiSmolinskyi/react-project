import React, { useEffect, useState } from 'react';
import './SearchBar.scss'

export const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    onSearch(searchQuery);
  }, [searchQuery]);

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={handleInputChange}
      placeholder="Search Shoes"
      className='input-search'
    />
  );
};