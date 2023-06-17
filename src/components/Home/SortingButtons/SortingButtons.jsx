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

  // const handleResetFilters = () =>{
  //   handleReset();
  // }


  return (
    <div className="sorting-buttons">
      <span onClick={handleSortAsc}>Lowest price</span>
      <span onClick={handleSortDesc}>Highest price</span>
      <span onClick={handleFilterMen}>Men</span>
      <span onClick={handleFilterWomen}>Women</span>
      {/* <button onClick={handleResetFilters}>Reset</button>       */}
    </div>
  );
};
