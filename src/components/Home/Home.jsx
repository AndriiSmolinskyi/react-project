// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { SearchBar } from './SearchBar/SearchBar';
// import { SortingButtons } from './SortingButtons/SortingButtons';
// import './Home.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
// import { Shoes } from './Shoes/Shoes';
// import { NavLink } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
// library.add(faMagnifyingGlass, faUser);

// export const Home = () => {
//   const [shoesData, setShoesData] = useState([]);
//   const [displayedShoesData, setDisplayedShoesData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios('/react-project/json/api.json').then(res => {
//       setShoesData(res.data.sneakers);
//       setDisplayedShoesData(res.data.sneakers);
//     });
//   }, []);

//   const handleSort = (sortOrder) => {
//     const sortedShoesData = [...displayedShoesData].sort((a, b) => {
//       if (sortOrder === 'asc') {
//         return a.retail_price_cents - b.retail_price_cents;
//       } else if (sortOrder === 'desc') {
//         return b.retail_price_cents - a.retail_price_cents;
//       } 
//       return 0;
//     });
//     setDisplayedShoesData(sortedShoesData);
//   };

//   const handleFilter = (gender) => {
//     const filteredShoesData = shoesData.filter(item => item.gender.includes(gender));
//     setDisplayedShoesData(filteredShoesData);
//   };

//   const handleSearch = (query) => {
//     const searchQueries = query.toLowerCase().split(' ');

//     const filteredData = shoesData.filter((item) => {
//       const itemName = item.name.toLowerCase();
//       const itemBrand = item.brand_name.toLowerCase();

//       return searchQueries.every((searchQuery) =>
//         itemName.includes(searchQuery) || itemBrand.includes(searchQuery)
//       );
//     });

//     setDisplayedShoesData(filteredData);
//   };

//   function clickFull(id){
//     navigate(`/shoesfull/${id}`);
//   }
  
//   return (
//     <div className="home">
//       <div className="home__up">
//         <h1 className='home__title'>Hype Sneakers</h1>
//         <NavLink to="/account" className="home__link">
//           <FontAwesomeIcon icon={faUser} />
//         </NavLink>
//       </div>
      
//       <div className="home__nav">
//         <div className='input__box'>
//           <SearchBar onSearch={handleSearch} className="input__search"/>         
//           <div className='input__icon-block'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>         
//         </div> 
//         <SortingButtons handleSort={handleSort} handleFilter={handleFilter}  />   
//       </div>
      
//       <div className="shoes-block">
//         {displayedShoesData.map(item => (
//             <span key={item.id} onClick={() => clickFull(item.id)} className='shoes-block__item'>
//               <Shoes key={item.id} imgUrl={item.main_picture_url} price={item.retail_price_cents} name={item.name}/>  
//             </span>               
//         ))}
//       </div>
//     </div>
//   );
// };





import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SearchBar } from './SearchBar/SearchBar';
import { SortingButtons } from './SortingButtons/SortingButtons';
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { Shoes } from './Shoes/Shoes';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

library.add(faMagnifyingGlass, faUser);

export const Home = () => {
  const [shoesData, setShoesData] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    axios('/react-project/json/api.json').then((res) => {
      setShoesData(res.data.sneakers);
    });
  }, []);

  const handleSort = (sortOrder) => {
    const sortedShoesData = [...shoesData].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.retail_price_cents - b.retail_price_cents;
      } else if (sortOrder === 'desc') {
        return b.retail_price_cents - a.retail_price_cents;
      }
      return 0;
    });
    setShoesData(sortedShoesData);
  };

  const handleFilter = (gender) => {
    const filteredShoesData = shoesData.filter((item) =>
      item.gender.includes(gender)
    );
    setShoesData(filteredShoesData);
  };

  const handleSearch = (query) => {
    const searchQueries = query.toLowerCase().split(' ');

    const filteredData = shoesData.filter((item) => {
      const itemName = item.name.toLowerCase();
      const itemBrand = item.brand_name.toLowerCase();

      return searchQueries.every(
        (searchQuery) =>
          itemName.includes(searchQuery) || itemBrand.includes(searchQuery)
      );
    });

    setShoesData(filteredData);
  };

  const clickFull = (id) => {
    navigate(`/shoesfull/${id}`);
  };

  const displayedShoesData = shoesData.slice(0, currentPage * itemsPerPage);
  const hasMoreItems = currentPage * itemsPerPage < shoesData.length;

  const loadMoreItems = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="home">
      <div className="home__up">
        <h1 className="home__title">Hype Sneakers</h1>
        <NavLink to="/account" className="home__link">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
      </div>

      <div className="home__nav">
        <div className="input__box">
          <SearchBar onSearch={handleSearch} className="input__search" />
          <div className="input__icon-block">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        <SortingButtons handleSort={handleSort} handleFilter={handleFilter} />
      </div>

      <div className="shoes-block">
        {displayedShoesData.map((item) => (
          <span
            key={item.id}
            onClick={() => clickFull(item.id)}
            className="shoes-block__item"
          >
            <Shoes
              key={item.id}
              imgUrl={item.main_picture_url}
              price={item.retail_price_cents}
              name={item.name}
            />
          </span>
        ))}
      </div>

      <div className='load__block'>
        {hasMoreItems && (
          <button className="load-more-button" onClick={loadMoreItems}>
            Load More
          </button>
        )}
      </div>
     
    </div>
  );
};