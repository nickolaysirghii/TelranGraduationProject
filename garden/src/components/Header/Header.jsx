import React from 'react';
import "./header.css";
import bag from "../../svg/bag.svg";
import  { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
        <Link to="/" className='logo'></Link>
        <Link to="/categories"><button>Catalog</button></Link>
        <div className='links'>
            <Link to="/">Main Page</Link>
            <Link to="/allProducts" className='products'>All products</Link>
            <Link to="/productSales">All sales</Link>
        </div>
       <Link to="/cart"><img src={bag} alt='bag' className='bag'/></Link>
    </header>
  )
}

export default Header