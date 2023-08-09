import React from 'react';
import GeneralPage from "../GeneralPage/GeneralPage";
import { useSelector } from 'react-redux';

const CategoryProducts = () => {
    const categoryProducts1 = useSelector((state)=>state.eachCat.category.data);
    const AllProducts = useSelector((state)=>state.productsAll.products);
    const TheName = useSelector((state)=>state.name1.catName)

   let finalState = [];
AllProducts && AllProducts.forEach((elem1)=>{
categoryProducts1 && categoryProducts1.forEach((elem2)=>{
    if(elem1.id === elem2.id){
      finalState.push(elem1)
    }
   })
   })
 
return (
    <GeneralPage title={TheName} data={finalState} />
  )
}

export default CategoryProducts