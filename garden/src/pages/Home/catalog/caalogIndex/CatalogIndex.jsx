import React from 'react';
import "./catalogIndex.css";

const CatalogIndex = ({elem}) => {
  return (
    <div className='catIndex'>
        <div className='indexImage' style={{backgroundImage: `url(${elem.image})`}}></div>
        <p>{elem.title}</p>
    </div>
  )
}

export default CatalogIndex