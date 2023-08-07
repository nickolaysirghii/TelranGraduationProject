import React from 'react';
import "./randomeElement.css";
import { useDispatch } from 'react-redux';
import { changeObject } from '../../../../reduxStore/slice/eachProduct';
import { Link } from 'react-router-dom';


const RandomeElement = ({elemR}) => {
  const dispatcher = useDispatch();
  const elementDescription = ()=>{
    dispatcher(changeObject(elemR))
    
  }

    const discountPercent = (elemR.discont_price/elemR.price).toFixed(2)
  return (
    <Link to="/sales/all" className='randomeContainer2' onClick={elementDescription}>
        <div className='randomeImage34' style={{backgroundImage: `url(http://localhost:3333/${elemR.image})`}}></div>
        <p className='PriceRan'>{`${elemR.discont_price}$`}</p>
        <p className='oldPri11'>{`${elemR.price}$`}</p>
        <p className='percentRand'>{`-${discountPercent}%`}</p>
        <p className='descriptionRandome'>
           {elemR.title}
        </p>
    </Link>
  )
}

export default RandomeElement