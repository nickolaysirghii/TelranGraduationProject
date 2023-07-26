import React from 'react';
import "../ToolsAndEquipment/tools.css";
import { useSelector } from "react-redux";
import EveryProduct from './EveryProduct/EveryProduct';



const AllProducts = () => {
  const allProducts = useSelector((state)=>state.productsAll.products)
 
   return (
    <div className='tools'>
        < h2 className='titleTools'>All products</h2>
        <form   className='toolsForm'>
            <p className='toolPrice'>Price</p>
                 <input className='from' type='text' placeholder='from' name='from' />
                 <input className='to' type='text' placeholder='to' name='to' />
            <p className='disItems'>Discounted items</p>
                 <input className='checkBox' type='checkBox' name='check'  />
            <p className='sortedTools'>Sorted</p>
                <input className='sortedInput' placeholder='by default' type='number' name='sortedBy'/>
                <button>Search</button>
        </form>
        <div className='toolContainer'>
       {
        
        allProducts.map((elem , idx)=>{
          return <EveryProduct index={idx} element = {elem} key={idx}>{}</EveryProduct>
        })
       }
        </div>
    </div>
  )
}

export default AllProducts