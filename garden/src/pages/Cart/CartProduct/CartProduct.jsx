import React from 'react';
import "./cartProduct.css";

const CartProduct = () => {
  return (
    <div className='cartProduct'>
        <div className='cartImageProduct'></div>
        <div className='desProCart'>Curb</div>
        <div className='amount'>
            <p className='decrees'>-</p>
            <p className='amountNumber'>1</p>
            <p className='increase'>+</p>
        </div>
        <p className='cartProdPrice'>199
        <span className='dollar33'>$</span>
        </p>
        <p className='oldPriceCart'>250$</p>
        <p className='deleteProdCart'>X</p>
    </div>
  )
}

export default CartProduct