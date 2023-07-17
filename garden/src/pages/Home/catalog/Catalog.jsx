import React from 'react';
import "./catalog.css";
import { Link } from 'react-router-dom';

const Catalog = () => {
  return (
    <div className='catalog'>
        <h2 className='catalogTitle'>Catalog</h2>
        <Link to="/categories"><button>All categories</button></Link>
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