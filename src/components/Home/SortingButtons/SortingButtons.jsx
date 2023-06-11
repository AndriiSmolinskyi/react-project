import React from 'react';
import './SortingButtons.scss';

export const SortingButtons = ({ handleSort, handleFilter }) => {
  const handleSortAsc = () => {
    handleSort('asc');
  };

  const handleSortDesc = () => {
    handleSort('desc');
  };

  const handleFilterMen = () => {
    handleFilter('men');
  };

  const handleFilterWomen = () => {
    handleFilter('women');
  };


  return (
    <div className="sorting-buttons">
      <button onClick={handleSortAsc}>Lowest price</button>
      <button onClick={handleSortDesc}>Highest price</button>
      <button onClick={handleFilterMen}>Men</button>
      <button onClick={handleFilterWomen}>Women</button>
    </div>
  );
};