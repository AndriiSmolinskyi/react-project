// import React from 'react';

// export const SortingButtons = ({
//   selectedSize,
//   setSelectedSize,
//   selectedGender,
//   setSelectedGender,
//   selectedColor,
//   setSelectedColor,
//   sortType,
//   setSortType,
// }) => {
//   const handleSizeChange = (event) => {
//     setSelectedSize(event.target.value);
//   };

//   const handleGenderChange = (event) => {
//     setSelectedGender(event.target.value);
//   };

//   const handleColorChange = (event) => {
//     setSelectedColor(event.target.value);
//   };

//   const handleSortChange = (event) => {
//     setSortType(event.target.value);
//   };

//   return (
//     <div className="sorting-buttons">
//       <select value={selectedSize} onChange={handleSizeChange}>
//         <option value="">Select Size</option>
//         <option value={5}>5</option>
//         <option value={5.5}>5.5</option>
//         <option value={6}>6</option>
//         <option value={6.5}>6.5</option>
//         <option value={7}>7</option>
//         <option value={7.5}>7.5</option>
//         <option value={8}>8</option>
//         <option value={8.5}>8.5</option>
//         <option value={9}>9</option>
//         <option value={9.5}>9.5</option>
//         <option value={10}>10</option>
//         <option value={10.5}>10.5</option>
//         <option value={11}>11</option>
//         <option value={11.5}>11.5</option>
//         <option value={12}>12</option>
//         <option value={12.5}>12.5</option>
//         <option value={13}>13</option>
//         <option value={13.5}>13.5</option>
//         <option value={14}>14</option>
//         <option value={14.5}>14.5</option>
//       </select>

//       <select value={selectedGender} onChange={handleGenderChange}>
//         <option value="">Select Gender</option>
//         <option value="men">men</option>
//         <option value="women">women</option>
//       </select>

//       <select value={selectedColor} onChange={handleColorChange}>
//         <option value="">Select Color</option>
//         <option value="Black">Black</option>
//         <option value="White">White</option>
//         <option value="Blue">Blue</option>
//         <option value="Brown">Brown</option>
//         <option value="Red">Red</option>
//         <option value="Yellow">Yellow</option>
//         <option value="Pink">Pink</option>
//       </select>

//       <select value={sortType} onChange={handleSortChange}>
//         <option value="">Sort By</option>
//         <option value="newest">Newest Deals</option>
//         <option value="lowestPrice">Lowest Price</option>
//         <option value="highestPrice">Highest Price</option>
//       </select>
//     </div>
//   );
// };

import React from 'react';

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