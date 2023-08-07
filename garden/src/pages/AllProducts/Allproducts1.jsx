import React from 'react';
import GeneralPage from '../GeneralPage/GeneralPage';
import { useSelector } from 'react-redux';

const AllProducts = () => {
    const allProd = useSelector((state)=>state.productsAll.products)

  return (
    <GeneralPage title="All Products" data={allProd}/>
  )
}

export default AllProducts