import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SearchBar } from './SearchBar/SearchBar';
import './Home.scss';

export const Home = () => {
  const [shoesData, setShoesData] = useState([]);
  const [filteredShoes, setFilteredShoes] = useState([]);
  const [visibleItems, setVisibleItems] = useState(10); // Початкова кількість видимих елементів
  const itemsPerLoad = 20; // Кількість елементів для прогрузки

  useEffect(() => {
    axios.get('./json/api.json').then((res) => {
      setShoesData(res.data.sneakers);
      setFilteredShoes(res.data.sneakers.slice(0, visibleItems));
    });
  }, [visibleItems]);

  const handleSearch = (query) => {
    const searchQueries = query.toLowerCase().split(" ");

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
      <SearchBar onSearch={handleSearch} />
      <div className='home__shoes'>
        {filteredShoes.map((item) => (
          <div key={item.id} className='home__shoes__item'>
            <div>
              <img src={item.grid_picture_url} alt="" />
            </div>
            <div>{item.brand_name}</div>
            <div>{item.name}</div>          
            <div>price: {item.retail_price_cents / 100}$</div>
          </div>
        ))}
      </div>
      {filteredShoes.length < shoesData.length && (
        <button onClick={handleLoadMore} className='home__shoes__button'>Load More</button>
      )}
    </div>
  );
};
 