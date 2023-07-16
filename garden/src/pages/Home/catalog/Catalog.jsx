import React from 'react';
import "./catalog.css";

const Catalog = () => {
  return (
    <div className='catalog'>
        <h2 className='catalogTitle'>Catalog</h2>
        <button>All categories</button>
        <div className='catalogContainer'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
    </div>
  )
}

export default Catalog