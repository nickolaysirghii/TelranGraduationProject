import React from 'react';
import "../ToolsAndEquipment/tools.css";
import { useSelector } from "react-redux";
import EveryProduct from './EveryProduct/EveryProduct';

const AllProducts = () => {
  const products  = useSelector((state)=>state.number.data1)
  return (
    <div className='tools'>
        < h2 className='titleTools'>All products</h2>
        <form className='toolsForm'>
            <p className='toolPrice'>Price</p>
                 <input className='from' type='text' placeholder='from' />
                 <input className='to' type='text' placeholder='to' />
            <p className='disItems'>Discounted items</p>
                 <input className='checkBox' type='checkBox' />
            <p className='sortedTools'>Sorted</p>
                <input className='sortedInput' placeholder='by default' type='number'/>
        </form>
        <div className='toolContainer'>
       {
        products.map((elem , idx)=>{
          return <EveryProduct element = {elem} key={idx}>{}</EveryProduct>
        })
       }
        </div>
    </div>
  )
}

export default AllProducts