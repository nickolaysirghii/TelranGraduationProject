import React from 'react';
import "./eachProduct.css";
import {  useSelector , useDispatch } from "react-redux"
import { add_to_cart } from '../../reduxStore/slice/products_all';

const EachProduct = () => {
  const productObject = useSelector((state)=>state.eachPro.eachProd);
  const percent = (productObject.price / productObject.discont_price);
  const dispatcher = useDispatch();
  const addToCart = ()=>{
    dispatcher(add_to_cart(productObject.id-1))
  }

 return (
    <div className='eachProduct'>
        <div className='eachPrTitle'>{productObject.title}</div>
        <div className='productPicture' style={{backgroundImage: `url(${productObject.image})` }}></div>
        <h2 className='priceProduct'>{productObject.discont_price}
               <span className='dolars'>$</span>
        </h2>
        <p className='lastPrice'>{`${productObject.price}$`}</p>
        <p className='percentDiscount'>{`-${percent.toFixed(2)}`}
              <span className='percent'>%</span>
        </p>
        <button className='toCart' onClick={addToCart}>To cart</button>
        <div className='description'>
            <p className='sedDescrip'>Description</p>
            <p className='descriptionText'>{productObject.description}</p>
        </div>
    </div>
  )
}

export default EachProduct