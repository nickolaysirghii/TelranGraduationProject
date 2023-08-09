import React from 'react';
import "./everyProduct.css";
import { useDispatch } from "react-redux";
import { productCart } from '../../../reduxStore/slice/cartProducts';
import { add_to_cart } from '../../../reduxStore/slice/products_all';
import { changeObject } from '../../../reduxStore/slice/eachProduct';
import { Link } from 'react-router-dom';


const EveryProduct = ({element}) => {
    const { price,title,discont_price } = element;
const dispatcher = useDispatch();
const short = `${title.slice(0,25)}...`

const addKeyToIt = ()=>{
dispatcher(add_to_cart(element.id -1));
dispatcher(productCart(element));
}
const detailed = ()=>{
  dispatcher(changeObject(element))
}

  return (
        <div className='every'>
             <Link to="/eachProduct"><div onClick={detailed} className='imageProduct' style={{backgroundImage:`url(http://localhost:3333/${element.image})`}} >
            </div></Link>
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
            <button className={element.amount ? "showNewButton" : 'NewButton' }
             onClick={addKeyToIt}>
              {element.amount ? "Added to cart" : "Add to cart"}
              
                <div className={element.amount ? "amOf2" : "amOf"}>{
                 element.amount
                }</div>
              
              </button>
        </div>
      )
}

export default EveryProduct