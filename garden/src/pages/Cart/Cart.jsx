import React from 'react';
import "./cart.css";
import CartProduct from './CartProduct/CartProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
  return (
    <div className='cart'>
        <h2 className='cartTitle'>Shopping cart</h2>
        <p className='backToStore'>Back to the store</p>
        <FontAwesomeIcon className='letAngle' icon={faAngleRight} />
        <div className='cartContainer'>
  
         <CartProduct />
         <CartProduct />
         <CartProduct />
         <CartProduct />
       
         </div>
        <form className='orderDetails'>
         <p className='orerFormTitle'>Order details</p>
         <div className='total'>
           <p className='total2'>Total</p>
           <p className='totalPriceNumber'>3077,00
              <span className='dolar22'>$</span>
              </p>
          </div>
          <input placeholder='Phone number' />
          <button>Order</button>
        </form>
    </div>
  )
}

export default Cart