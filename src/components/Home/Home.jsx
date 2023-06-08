import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SearchBar } from './SearchBar/SearchBar';
import { SortingButtons } from './SortingButtons/SortingButtons';
import './Home.scss';

export const Home = () => {
  const [shoesData, setShoesData] = useState([]);
  const [filteredShoes, setFilteredShoes] = useState([]);
  const [visibleItems, setVisibleItems] = useState(12);
  const [sortType, setSortType] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [uniqueColors, setUniqueColors] = useState([]);
  const [uniqueSizes, setUniqueSizes] = useState([]);

  const itemsPerLoad = 20;

  const filterShoes = () => {
    let filteredData = [...shoesData];

    if (selectedSize) {
      filteredData = filteredData.filter((item) => item.size_range.includes(parseFloat(selectedSize)));
    }

    if (selectedGender) {
      filteredData = filteredData.filter((item) => item.gender.includes(selectedGender));
    }

    if (selectedColor) {
      filteredData = filteredData.filter((item) => item.color === selectedColor);
    }

    if (sortType === 'newest') {
      filteredData.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    } else if (sortType === 'lowestPrice') {
      filteredData.sort((a, b) => a.retail_price_cents - b.retail_price_cents);
    } else if (sortType === 'highestPrice') {
      filteredData.sort((a, b) => b.retail_price_cents - a.retail_price_cents);
    } else if (sortType === 'size') {
      filteredData.sort((a, b) => a.size_range[0] - b.size_range[0]);
    }

    setFilteredShoes(filteredData.slice(0, visibleItems));
  };

  useEffect(() => {
    axios.get('./json/api.json').then((res) => {
      const { sneakers } = res.data;
      setShoesData(sneakers);
      setFilteredShoes(sneakers.slice(0, visibleItems));
      const colors = [...new Set(sneakers.map((item) => item.color))];
      const sizes = [...new Set(sneakers.flatMap((item) => item.size_range))];
      setUniqueColors(colors);
      setUniqueSizes(sizes);
    });
  }, [visibleItems]);

  useEffect(() => {
    filterShoes();
  }, [sortType, selectedSize, selectedGender, selectedColor]);

  const handleSearch = (query) => {
    const searchQueries = query.toLowerCase().split(' ');

    const filteredData = shoesData.filter((item) => {
      const itemName = item.name.toLowerCase();
      const itemBrand = item.brand_name.toLowerCase();

      return searchQueries.every((searchQuery) =>
        itemName.includes(searchQuery) || itemBrand.includes(searchQuery)
      );
    });

    setFilteredShoes(filteredData.slice(0, visibleItems));
  };

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + itemsPerLoad);
  };

  return (
    <div className="home">
      <div className="home__nav">
         <SearchBar onSearch={handleSearch} className="input__search"/>
         <SortingButtons
         selectedSize={selectedSize}
         setSelectedSize={setSelectedSize}
         selectedGender={selectedGender}
         setSelectedGender={setSelectedGender}
         selectedColor={selectedColor}
         setSelectedColor={setSelectedColor}
         sortType={sortType}
         setSortType={setSortType}
         uniqueSizes={uniqueSizes}
         uniqueColors={uniqueColors}
         
         />
      </div>
      
      <div className="home__shoes">
        {filteredShoes.map((item) => (
          <div key={item.id} className="home__shoes__item">
            <div className='home__img__block'>
              <img src={item.grid_picture_url} alt="" />
            </div>
            <div>{item.brand_name}</div>
            <div>{item.name}</div>
            <div>price: {item.retail_price_cents / 100}$</div>
          </div>
        ))}
      </div>
      <div className="home__btn">
        {filteredShoes.length < shoesData.length && (
          <button onClick={handleLoadMore} className="home__shoes__button">
            Load More
          </button>
        )}
      </div>
    </div>
  );
};