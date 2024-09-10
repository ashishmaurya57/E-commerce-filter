import React, { useState } from 'react';

import { cloth_list } from '../../assets/assets';


import Product from '../../component2/product/Product';
import Recommended from '../../component2/recommended/Recommended';
import Slidebar from '../../component2/slidebar/Slidebar';

import Card from '../../component2/card/Card'; // Make sure you have a Card component

import './itemDetail.css';
import Navbar from '../../component2/navbar/Navbar';


const ItemDetails = () => {
  

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = cloth_list.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  const filteredData = (items, selected, searchQuery) => {
    let filteredProducts = items;

    if (searchQuery) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  };

  const result = filteredData(cloth_list, selectedCategory, query);
  let categories=["Sneakers","Flats","Sandals","Heels"];

let companies=["Nike","Puma","Adidas","Vans"];

  

  return (
  
   
    <div className='item1'>
    <div className='item2'>
      <Slidebar handleChange={handleChange}  categories={categories} className="item4"/>
     
      <Navbar query={query} handleInputChange={handleInputChange} />
      
      <Recommended  handleClick={handleClick} companies={companies}  />
      <Product  result={result}/>
    </div>
   
    
   
    
    </div>
  
  );
};

export default ItemDetails;
