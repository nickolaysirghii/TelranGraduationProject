import React from 'react';
import "./cartProduct.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const CartProduct = ({element}) => {
 const {discont_price,price} = element;
  
  return (
    <div className='cartProduct'>
        <div className='cartImageProduct'></div>
        <div className='desProCart'>Curb</div>
        <div className='amount'>
            <p className='decrees'>-</p>
            <p className='amountNumber'></p>
            <p className='increase' >+</p>
        </div>
        <p className='cartProdPrice'>{price}
        <span className='dollar33'>$</span>
        </p>
        {
         discont_price && <p className='oldPriceCart'>{`${discont_price}$`}</p>
        }
        
        <FontAwesomeIcon className='deleteProdCart' icon={faXmark} />
    </div>
  )
}

export default CartProduct