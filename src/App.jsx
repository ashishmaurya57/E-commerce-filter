// src/App.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { Route, Routes } from 'react-router-dom';



import ItemDetails from './pages/itemDetails/ItemDetails'; // Import the new ItemDetails component

const App = () => {
  return (
    <div className='app'>
     
      <Routes>
        <Route path='/' element={<ItemDetails />} />
     
       
      </Routes>
      
    </div>
  );
}

export default App;
