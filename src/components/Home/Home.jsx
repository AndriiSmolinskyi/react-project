// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { SearchBar } from './SearchBar/SearchBar';
// import './Home.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// library.add(faMagnifyingGlass);

// export const Home = () => {
//   const [shoesData, setShoesData] = useState([]);
//   const [filteredShoes, setFilteredShoes] = useState([]);
//   const [visibleItems, setVisibleItems] = useState(12);
//   const [lowestPrice, setLowestPrice] = useState([])

//   const itemsPerLoad = 12;

//   useEffect(() => {
//     axios.get('./json/api.json').then((res) => {
//       const { sneakers } = res.data;
//       setShoesData(sneakers);
//       setFilteredShoes(sneakers.slice(0, visibleItems));
//     });
//   }, [visibleItems]);

//   const handleSearch = (query) => {
//     const searchQueries = query.toLowerCase().split(' ');

//     const filteredData = shoesData.filter((item) => {
//       const itemName = item.name.toLowerCase();
//       const itemBrand = item.brand_name.toLowerCase();

//       return searchQueries.every((searchQuery) =>
//         itemName.includes(searchQuery) || itemBrand.includes(searchQuery)
//       );
//     });

//     setFilteredShoes(filteredData.slice(0, visibleItems));
//   };

//   const handleLoadMore = () => {
//     setVisibleItems((prevVisibleItems) => prevVisibleItems + itemsPerLoad);
//   };

//   return (
//     <div className="home">
//       <h1 className='home__title'>Hype Sneakers</h1>
//       <div className="home__nav">
//         <div className='input__box'>
//           <SearchBar onSearch={handleSearch} className="input__search"/>         
//           <div className='input__icon-block'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
//         </div>        
//       </div>
      
//       <div className="home__shoes">
//         {filteredShoes.map((item) => (
//           <div key={item.id} className="home__shoes__item">
//             <div className='home__img__block'>
//               <img src={item.grid_picture_url} alt="" />
//             </div>
//             <div>{item.name}</div>
//             <div>price: {item.retail_price_cents / 100}$</div>
//           </div>
//         ))}
//       </div>
//       <div className="home__btn">
//         {filteredShoes.length < shoesData.length && (
//           <button onClick={handleLoadMore} className="home__shoes__button">
//             Load More
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SearchBar } from './SearchBar/SearchBar';
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { SortingButtons } from './SortingButtons/SortingButtons';

library.add(faMagnifyingGlass);

export const Home = () => {
  const [shoesData, setShoesData] = useState([]);
  const [filteredShoes, setFilteredShoes] = useState([]);
  const [visibleItems, setVisibleItems] = useState(12);

  const itemsPerLoad = 12;

  useEffect(() => {
    axios.get('./json/api.json').then((res) => {
      const { sneakers } = res.data;
      setShoesData(sneakers);
      setFilteredShoes(sneakers.slice(0, visibleItems));
    });
  }, [visibleItems]);

  const handleSearch = (query) => {
    const searchQueries = query.toLowerCase().split(' ');

    const filteredData = shoesData.filter((item) => {
      const itemName = item.name.toLowerCase();
      const itemBrand = item.brand_name.toLowerCase();

      return searchQueries.every(
        (searchQuery) => itemName.includes(searchQuery) || itemBrand.includes(searchQuery)
      );
    });

    setFilteredShoes(filteredData.slice(0, visibleItems));
  };

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + itemsPerLoad);
  };

  const handleFilter = (type) => {
    let sortedData = [...filteredShoes];

    if (type === 'lowest') {
      sortedData.sort((a, b) => a.retail_price_cents - b.retail_price_cents);
    } else if (type === 'highest') {
      sortedData.sort((a, b) => b.retail_price_cents - a.retail_price_cents);
    } else if (type === 'newest') {
      sortedData.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    } else if (type === 'men') {
      sortedData = shoesData.filter((item) => item.gender === 'men');
    } else if (type === 'women') {
      sortedData = shoesData.filter((item) => item.gender === 'women');
    }

    setFilteredShoes(sortedData.slice(0, visibleItems));
  };

  return (
    <div className="home">
      <h1 className="home__title">Hype Sneakers</h1>
      <div className="home__nav">
        <div className="input__box">
          <SearchBar onSearch={handleSearch} className="input__search" />
          <div className="input__icon-block">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
      </div>

      <SortingButtons handleFilter={handleFilter} />

      <div className="home__shoes">
        {filteredShoes.map((item) => (
          <div key={item.id} className="home__shoes__item">
            <div className="home__img__block">
              <img src={item.grid_picture_url} alt="" />
            </div>
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