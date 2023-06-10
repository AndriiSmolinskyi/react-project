import React from 'react';

export const SortingButtons = ({ handleFilter }) => {
  return (
    <div className="filter__box">
      <button className="filter__button" onClick={() => handleFilter('lowest')}>
        Lowest Price
      </button>
      <button className="filter__button" onClick={() => handleFilter('highest')}>
        Highest Price
      </button>
      <button className="filter__button" onClick={() => handleFilter('newest')}>
        Newest Deals
      </button>
      <button className="filter__button" onClick={() => handleFilter('men')}>
        Men
      </button>
      <button className="filter__button" onClick={() => handleFilter('women')}>
        Women
      </button>
    </div>
  );
};

