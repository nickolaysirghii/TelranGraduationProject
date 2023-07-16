import React from 'react';
import "./tools.css"

const Tools = () => {
  return (
    <div className='tools'>
        < h2 className='titleTools'>Tools and equipment</h2>
        <form className='toolsForm'>
            <p className='toolPrice'>Price</p>
            <input className='from' type='text' placeholder='from' />
            <input className='to' type='text' placeholder='to' />
            <p className='disItems'>Discounted items</p>
            <input className='checkBox' type='checkBox' />
        
            
        </form>
        <div className='toolContainer'>
            
        </div>
    </div>
  )
}

export default Tools