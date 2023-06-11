import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SearchBar } from './SearchBar/SearchBar';
import { SortingButtons } from './SortingButtons/SortingButtons';
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Shoes } from './Shoes/Shoes';
library.add(faMagnifyingGlass);

export const Home = () => {
  const [shoesData, setShoesData] = useState([]);
  const [displayedShoesData, setDisplayedShoesData] = useState([]);

  useEffect(() => {
    axios('/json/api.json').then(res => {
      setShoesData(res.data.sneakers);
      setDisplayedShoesData(res.data.sneakers);
    });
  }, []);

  const handleSort = (sortOrder) => {
    const sortedShoesData = [...displayedShoesData].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.retail_price_cents - b.retail_price_cents;
      } else if (sortOrder === 'desc') {
        return b.retail_price_cents - a.retail_price_cents;
      } 
      return 0;
    });
    setDisplayedShoesData(sortedShoesData);
  };

  const handleFilter = (gender) => {
    const filteredShoesData = shoesData.filter(item => item.gender.includes(gender));
    setDisplayedShoesData(filteredShoesData);
  };
  
  return (
    <div className="home">
      <SortingButtons handleSort={handleSort} handleFilter={handleFilter}/>
      <div className="shoes-block">
        {displayedShoesData.map(item => (
          <Shoes key={item.id} imgUrl={item.main_picture_url} price={item.retail_price_cents} name={item.name}/>
        ))}
      </div> 
    </div>
  );
};
