import React from 'react';
import GeneralPage from "../GeneralPage/GeneralPage";
import { useSelector } from 'react-redux';

const CategoryProducts = () => {
    const AllProducts = useSelector((state)=>state.productsAll.products);
    const TheName = useSelector((state)=>state.name1.catName);
    const TheId = useSelector((state)=>state.name1.catId);

   let finalState = [];

   AllProducts.forEach((elem)=>{
    if(elem.categoryId === TheId){
      finalState.push(elem)
    }
   })

 return (
    <GeneralPage title={TheName} data={finalState} />
  )
}

export default CategoryProducts