
import React from 'react';
import './SortingButtons.scss'
export const SortingButtons = ({
  selectedSize,
  setSelectedSize,
  selectedGender,
  setSelectedGender,
  selectedColor,
  setSelectedColor,
  sortType,
  setSortType,
  uniqueSizes,
  uniqueColors,
}) => {
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortType(event.target.value);
  };

  return (
    <div className="sorting-buttons">
      <select value={selectedSize} onChange={handleSizeChange}>
        <option value="">Select Size</option>
        {uniqueSizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>

      <select value={selectedGender} onChange={handleGenderChange}>
        <option value="">Select Gender</option>
        <option value="men">men</option>
        <option value="women">women</option>
      </select>

      <select value={selectedColor} onChange={handleColorChange}>
        <option value="">Select Color</option>
        {uniqueColors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>

      <select value={sortType} onChange={handleSortChange}>
        <option value="">Sort By</option>
        <option value="newest">Newest Deals</option>
        <option value="lowestPrice">Lowest Price</option>
        <option value="highestPrice">Highest Price</option>
      </select>
    </div>
  );
};

