import React from 'react';
import "./everyProduct.css";
import { useDispatch } from "react-redux";
import { productCart } from '../../../reduxStore/slice/cartProducts';
import { add_to_cart } from '../../../reduxStore/slice/products_all';




const EveryProduct = ({element,index}) => {
const { price,title,discont_price } = element;
const dispatcher = useDispatch();
const short = `${title.slice(0,25)}...`

const addKeyToIt = ()=>{
dispatcher(add_to_cart(index))
dispatcher(productCart(element))

}
return (
    <div className='every'>
        <div className='imageProduct' style={{backgroundImage:`url(${element.image})`}} >
          <button className={element.amount ? "added" : 'addToTheCatr' }
           onClick={addKeyToIt}>
          {element.amount ? "Added to cart" : "Add to cart"}
          {
            <div className={element.amount ? "amOf2" : "amOf"}>{
             element.amount
            }</div>
          }
          
          </button>
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