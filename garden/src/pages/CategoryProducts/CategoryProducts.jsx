import React from 'react';
import GeneralPage from "../GeneralPage/GeneralPage";
import { useSelector } from 'react-redux';

const CategoryProducts = () => {
    const categoryProducts1 = useSelector((state)=>state.eachCat.category.data);
    const AllProducts = useSelector((state)=>state.productsAll.products);
    const TheName = useSelector((state)=>state.name1.catName)

    if(categoryProducts1){
      localStorage.setItem("categoryProducts",JSON.stringify(categoryProducts1))
      localStorage.setItem("catName",JSON.stringify(TheName))
     }
     const trale = localStorage.getItem("categoryProducts");
     const Nam_nam = localStorage.getItem("catName");
     const trale2 = JSON.parse(trale);
     const Nam_e = JSON.parse(Nam_nam)
     const finalState = [];
AllProducts && AllProducts.forEach((elem1)=>{
trale2.forEach((elem2)=>{
    if(elem1.id === elem2.id){
      finalState.push(elem1)
    }
   })
   })
 



return (
    <GeneralPage title={Nam_e} data={finalState} />
  )
}

export default CategoryProducts