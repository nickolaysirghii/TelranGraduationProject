import React from 'react';
import GeneralPage from '../GeneralPage/GeneralPage';
import { useSelector } from 'react-redux';

const AllSales = () => {
    const data = useSelector((state)=>state.productsAll.products);
    const data2 = [];
    data.forEach((elem)=>{
      if(elem.discont_price){
        data2.push(elem)
      }
    })
  return (
    <GeneralPage title="All sales" data={data2} />
  )
}

export default AllSales