import React, { useState } from 'react';
    import { assets } from '../../assets/assets';
    import './navbar.css';
    import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'
import { Link } from 'react-router-dom';
const Navbar = ({ handleInputChange, query }) => {
    const [menu, setMenu]=useState("home");
    return (
        <div className='navbar'>
        <Link to='/'><img src={assets.logo} height="45px" width="130px" className='logo'/></Link> 
        <ul className='navbar-menu'>
       <Link to='/'> <li onClick={()=>setMenu("home")}    className={menu==="home" ?"active":""}>Home</li></Link>
        <li onClick={()=>setMenu("Men")}    className={menu==="Men" ?"active":""}>Men</li>
        <li onClick={()=>setMenu("women")} className={menu==="women" ?"active":""}>Women</li>
        <li onClick={()=>setMenu("kid")} className={menu==="kid" ?"active":""}>kid</li>
        <li onClick={()=>setMenu("shoes")} className={menu==="shoes" ?"active":""}>Shoes</li>
        <li onClick={()=>setMenu("Contact")} className={menu==="Contact" ?"active":""}>Contact-us</li>
        </ul>
        
        <div className='navbar-right'>
      
        <nav>
        <div className="nav-container">
          <input
            className="search-input"
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder="Enter your search shoes."
          />
        </div>
        <div className="profile-container">
          <a href="#">
            <FiHeart className="nav-icons" />
          </a>
          <a href="">
            <AiOutlineShoppingCart className="nav-icons" />
          </a>
          <a href="">
            <AiOutlineUserAdd className="nav-icons" />
          </a>
        </div>
      </nav>
      </div>
        </div>
    );
}

export default Navbar;
