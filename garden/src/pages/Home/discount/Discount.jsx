import React from 'react';
import "./discount.css";
import { Link } from "react-router-dom";

const Discount = () => {
  return (
    <div className='discount'>
        <div className='elf'></div>
        <strong>5% off</strong>
        <p>on the first order</p>
        <form>
            <input type='text' defaultValue="+49" />
            <Link to="/productSales"><button>Get a discount</button></Link>
        </form>
    </div>
  )
}

export default Discount