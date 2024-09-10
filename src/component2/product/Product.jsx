import React from 'react';
import './product.css';
import Card from '../card/Card';

const Product = ({ result }) => {
  return (
    <section className='card-container'>
      {result.length > 0 ? result : <p>No products found</p>}
    </section>
  );
};

export default Product;
