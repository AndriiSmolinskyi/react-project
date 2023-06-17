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
      <span onClick={handleSortAsc} className='sorting-buttons__item'>Lowest price</span>
      <span onClick={handleSortDesc} className='sorting-buttons__item'>Highest price</span>
      <span onClick={handleFilterMen} className='sorting-buttons__item'>Men</span>
      <span onClick={handleFilterWomen} className='sorting-buttons__item'>Women</span>
      {/* <button onClick={handleResetFilters}>Reset</button>       */}
    </div>
  );
};
