import React from 'react';
import "./categories.css";
import { useSelector} from "react-redux";
import EachCat from './EachCat/EachCat';

const Categories = () => {
  const cat2 = useSelector((state)=>state.category.category);

  return (
    <div className='categories'>
      <h2>Categories</h2>
      <div className='catContainer'>
        {
          cat2.map((elem,idx)=>{
            return <EachCat id={elem.id} title={elem.title} image={elem.image} key={idx}>{elem.title}</EachCat>
          })
        }
      </div>
    </div>
  )
}

export default Categories