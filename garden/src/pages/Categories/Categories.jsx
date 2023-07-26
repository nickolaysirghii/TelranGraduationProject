import React from 'react';
import "./categories.css";
import { categoriesAll } from "../../data/categoriesAll";

const Categories = () => {
  console.log(categoriesAll)
  return (
    <div className='categories'>
      <h2>Categories</h2>
      <div className='catContainer'>
        {
          categoriesAll.map((elem,idx)=>{
            return <div key={idx}>{elem.title}</div>
          })
        }
      </div>
    </div>
  )
}

export default Categories