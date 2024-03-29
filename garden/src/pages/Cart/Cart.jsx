import React from 'react';
import "./cart.css";
import CartProduct from './CartProduct/CartProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"


const Cart = () => {
  const cartProucts = useSelector((state)=>state.productsAll.products);

let car = 0;
  cartProucts.forEach((elem) => {
    if(elem.amount){
    car = car + ( (elem.discont_price ? elem.discont_price : elem.price )* elem.amount)
    }
  })
  

return (
    <div className='cart'>
        <h2 className='cartTitle'>Shopping cart</h2>
        <p className='backToStore'>Back to the store</p>
        <Link to="/"><FontAwesomeIcon className='letAngle' icon={faAngleRight} /></Link>
        <div className='cartContainer'>
  
        {
          cartProucts.map((elem,idx)=>{
            if(elem.amount){
              return <CartProduct key={idx} element = {elem} idx={idx}/>
            }else 
            return null

            
          })
        }
       
         </div>
        <form className='orderDetails'>
         <p className='orerFormTitle'>Order details</p>
         <div className='total'>
           <p className='total2'>Total</p>
           <p className='totalPriceNumber'>{car.toFixed(2)}
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