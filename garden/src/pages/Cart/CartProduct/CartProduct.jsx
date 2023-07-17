import React from 'react';
import "./cartProduct.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const CartProduct = () => {
  let [amount , setAmount] = useState(1)
  const increase =()=>{
    setAmount(amount += 1)
  }
  const decrease =()=>{
    if(amount > 1){
    setAmount(amount -= 1)
  }
  }
  
  return (
    <div className='cartProduct'>
        <div className='cartImageProduct'></div>
        <div className='desProCart'>Curb</div>
        <div className='amount'>
            <p className='decrees'onClick={decrease} >-</p>
            <p className='amountNumber'>{amount}</p>
            <p className='increase' onClick={increase} >+</p>
        </div>
        <p className='cartProdPrice'>199
        <span className='dollar33'>$</span>
        </p>
        <p className='oldPriceCart'>250$</p>
        <FontAwesomeIcon className='deleteProdCart' icon={faXmark} />
    </div>
  )
}

export default CartProduct