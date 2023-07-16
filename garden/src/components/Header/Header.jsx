import React from 'react';
import "./header.css";
import bag from "../../svg/bag.svg"

const Header = () => {
  return (
    <header className='header'>
        <a className='logo' href='/'></a>
        <button>Catalog</button>
        <div className='links'>
            <a>Main Page</a>
            <a className='products'>All products</a>
            <a>All sales</a>
        </div>
        <img src={bag} alt='bag' className='bag'/>
    </header>
  )
}

export default Header