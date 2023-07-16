import React from 'react';
import "../ToolsAndEquipment/tools.css";

const ProductSales = () => {
  return (
    <div className='tools'>
        < h2 className='titleTools'>Products with sale</h2>
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
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </div>
    </div>
  )
}

export default ProductSales