import React from 'react'; 
import "./generalPage.css";
import EveryProduct from './EveryProduct/EveryProduct';

const GeneralPage = ({title,data}) => {
   return (
        <div className='tools'>
            < h2 className='titleTools'>{title}</h2>
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
              data && data.map((elem , idx)=>{
              return <EveryProduct index={idx} element = {elem} key={idx}>{}</EveryProduct>
            })
           }
            </div>
        </div>
      )
    }
    

export default GeneralPage