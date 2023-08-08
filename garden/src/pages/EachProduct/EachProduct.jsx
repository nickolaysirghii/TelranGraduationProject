import React from 'react';
import "./eachProduct.css";
import {  useSelector , useDispatch } from "react-redux"
import { add_to_cart } from '../../reduxStore/slice/products_all';
import { changeObject } from "../../reduxStore/slice/eachProduct"

const EachProduct = () => {

 

  const proBig = useSelector((state)=>state.productsAll.products)
  const productObject = useSelector((state)=>state.eachPro.eachProd);
  
 let data55 = {};
  proBig.forEach((elem)=>{
   if(elem.id === productObject.id){
    data55 = elem
   }
  })
  const percent = (data55.price / data55.discont_price);

  const dispatcher = useDispatch();
  const addToCart = ()=>{
    dispatcher(add_to_cart(data55.id-1))
  }


 return (
    <div className='eachProduct'>
        <div className='eachPrTitle'>{data55.title}</div>
        <div className='productPicture' style={{backgroundImage: `url(http://localhost:3333/${productObject.image})` }}></div>
        <h2 className='priceProduct'>{data55.price}
               <span className='dolars'>$</span>
        </h2>
        <p className='lastPrice'>{ data55.discont_price ? `${data55.discont_price}$`: ""}</p>
        <p className='percentDiscount'>{ percent>100 ? "":`-${percent.toFixed(2)}`}
              <span className='percent'>{percent>100 ? "":"%"}</span>
        </p>
        <button className='toCart' onClick={addToCart}>To Cart
        <div className={data55.amount ? "five" : "six"}>{data55.amount}</div>
        </button>
        <div className='description'>
            <p className='sedDescrip'>Description</p>
            <p className='descriptionText'>{data55.description}</p>
        </div>
    </div>
  )
}

export default EachProduct