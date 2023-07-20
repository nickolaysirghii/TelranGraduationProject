import React from 'react';
import "./everyProduct.css";
import { useDispatch } from "react-redux";
import { productCart } from '../../../reduxStore/slice/cartProducts';



const EveryProduct = ({element}) => {
const { price,title,discont_price } = element;
const dispatcher = useDispatch();

const short = `${title.slice(0,25)}...`

const addIt_toTheCart = ()=>{
  dispatcher(productCart(element))
}


   
  return (
    <div className='every'>
        <div className='imageProduct' >
          <button className='addToTheCatr' onClick={addIt_toTheCart}>Add to cart</button>
        </div>
        <p className='priceProduct2'>{price} 
        <span>$</span>
        </p>
        {discont_price &&
        <p className='oldPrice2'>{discont_price}
        <span>$</span>
        </p>}
        { discont_price &&
        <p className='percentOfDiscount'>{`-${(price/discont_price).toFixed(2)}`}
        <span>%</span>
        </p>
        }
        <p className='productTitle'>{title.length > 25 ? short : title}</p>
    </div>
  )
}

export default EveryProduct