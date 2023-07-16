import React from 'react';
import "./cart.css";
import CartProduct from './CartProduct/CartProduct';

const Cart = () => {
  return (
    <div className='cart'>
        <h2 className='cartTitle'>Shopping cart</h2>
        <p className='backToStore'>Back to the store</p>
        <p className='letAngle'>o</p>
        <div className='cartContainer'>
  
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