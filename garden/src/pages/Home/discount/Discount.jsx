import React from 'react';
import "./discount.css";

const Discount = () => {
  return (
    <div className='discount'>
        <div className='elf'></div>
        <strong>5% off</strong>
        <p>on the first order</p>
        <form>
            <input type='text' defaultValue="+49" />
            <button>Get a discount</button>
        </form>
    </div>
  )
}

export default Discount