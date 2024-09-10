import React from 'react'
import './slidebar.css';
import Category from './category/Category';
import Price from './price/Price';
import Color from './colors/Color';
const Slidebar = ({handleChange, categories}) => {
  return (
    <>
    <section className="sidebar">
      <div className="logo-container">
      
      </div>
      <Category handleChange={handleChange} categories={categories} />
      <Price handleChange={handleChange} />
      <Color handleChange={handleChange} />
    </section>
  </>
  )
}

export default Slidebar