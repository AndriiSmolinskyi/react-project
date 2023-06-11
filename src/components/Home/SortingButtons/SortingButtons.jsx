import React from 'react';
import './SortingButtons.scss';

export const SortingButtons = ({ handleSort, handleFilter, handleReset }) => {
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

  const handleResetFilters = () =>{
    handleReset();
  }


  return (
    <div className="sorting-buttons">
      <button onClick={handleSortAsc}>Lowest price</button>
      <button onClick={handleSortDesc}>Highest price</button>
      <button onClick={handleFilterMen}>Men</button>
      <button onClick={handleFilterWomen}>Women</button>
      <button onClick={handleResetFilters}>Reset</button>      
    </div>
  );
};

