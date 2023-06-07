import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SearchBar } from './SearchBar/SearchBar';

export const Home = () => {
  const [shoesData, setShoesData] = useState([]);
  const [filteredShoes, setFilteredShoes] = useState([]);

  useEffect(() => {
    axios.get('./json/api.json').then((res) => {
      setShoesData(res.data.sneakers);
      setFilteredShoes(res.data.sneakers);
    });
  }, []);

   const handleSearch = (query) => {
      const searchQueries = query.toLowerCase().split(" ");
   
      const filteredData = shoesData.filter((item) => {
      const itemName = item.name.toLowerCase();
      const itemBrand = item.brand_name.toLowerCase();
   
      return searchQueries.every((searchQuery) =>
         itemName.includes(searchQuery) || itemBrand.includes(searchQuery)
      );
      });
   
      setFilteredShoes(filteredData);
   };

  return (
    <div className="shoes-item__block">
      <SearchBar onSearch={handleSearch} />
      {filteredShoes.map((item) => (
        <div key={item.id}>
          <div>{item.brand_name}</div>
          <div>{item.name}</div>
          <div>
            <img src={item.grid_picture_url} alt="" />
          </div>
          <div>price: {item.retail_price_cents / 100}$</div>
        </div>
      ))}
    </div>
  );
};
 