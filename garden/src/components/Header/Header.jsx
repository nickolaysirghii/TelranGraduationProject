import React from 'react';
import "./header.css";
import bag from "../../svg/bag.svg";
import  { Link } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { fetchProducts } from '../../reduxStore/slice/products_all';
import { useEffect } from 'react';


const Header = () => {
  const dispatcher = useDispatch();
  useEffect(()=>{dispatcher(fetchProducts())},[])
  const productsCart = useSelector((state)=>state.productsAll.products)
  let numberOfProducts = 0;
  productsCart.forEach(elem=>{
    if(elem.amount){
      numberOfProducts  = numberOfProducts + elem.amount
    }
  })
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
       <div className={numberOfProducts > 0 ? "cartAmount" : "cartHidden"}>{numberOfProducts}</div>
    </header>
  )
}

export default Header
