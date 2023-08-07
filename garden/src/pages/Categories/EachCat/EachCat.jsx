import React from 'react';
import "./eachCat.css";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchEachCategories } from '../../../reduxStore/slice/each_category';
import { changeCatName } from '../../../reduxStore/slice/catName';


const EachCat = ({id,title,image}) => {
  const dispatcher = useDispatch();
  const chageEachCategory = ()=>{
    dispatcher(fetchEachCategories(id))
    dispatcher(changeCatName(title))

  }
  return (
    <Link onClick={chageEachCategory} to={`/categories/${id}`}  className='everyCategory'>
        <div className='image45' style={{backgroundImage: `url(http://localhost:3333/${image})`}}></div>
        <p>{title}</p>
    
    </Link>
  )
}

export default EachCat