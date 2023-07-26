import React from 'react';
import "./catalog.css";
import { Link } from 'react-router-dom';
import CatalogIndex from './caalogIndex/CatalogIndex';
import { categoriesAll } from  "../../../data/categoriesAll"

const Catalog = () => {
// console.log(categoriesAll)
  return (
    <div className='catalog'>
        <h2 className='catalogTitle'>Catalog</h2>
        <Link to="/categories"><button>All categories</button></Link>
        <div className='catalogContainer'>
         {
          categoriesAll.map((elem,idx)=>{
            return <CatalogIndex key={idx} elem={elem}></CatalogIndex>
          })
         }
        </div>
    </div>
  )
}

export default Catalog