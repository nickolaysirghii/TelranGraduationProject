import React from 'react';
import "./eachProduct.css";

const EachProduct = () => {
  return (
    <div className='eachProduct'>
        <div className='eachPrTitle'>Spade</div>
        <div className='productPicture'></div>
        <h2 className='priceProduct'>199
               <span className='dolars'>$</span>
        </h2>
        <p className='lastPrice'>250$</p>
        <p className='percentDiscount'>-7
              <span className='percent'>%</span>
        </p>
        <button className='toCart'>To cart</button>
        <div className='description'>
            <p className='sedDescrip'>Description</p>
            <p className='descriptionText'>Size,cm</p>
        </div>


    </div>
  )
}

export default EachProduct