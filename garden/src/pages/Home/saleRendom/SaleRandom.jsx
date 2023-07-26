import React from 'react';
import "./saleRandom.css"
import RandomeElement from './randomeElement/RandomeElement';
import { useSelector} from 'react-redux';


const SaleRandom = () => {
  const randomeSale = useSelector((state)=>state.productsAll.products);
  const sales  = [];
  randomeSale.forEach(elem=>{
  if(elem.discont_price){
    sales.push(elem)
  }
  });
 const randomNumbers = []
 randomNumbers[0] = (Math.random()*(sales.length-1)).toFixed();
 randomNumbers[1] = (Math.random()*(sales.length-1)).toFixed();
 randomNumbers[2] = (Math.random()*(sales.length-1)).toFixed();

const salesRandome = []

sales.forEach((elem,idx)=>{
  if(idx == randomNumbers[0] ||
     idx == randomNumbers[1] ||
     idx == randomNumbers[2]
    ){
    salesRandome.push(elem)
  }
})



  return (
    <div className='saleRandom'>
        <h2>Sale</h2>
        <div className='randomContainer'>
          {
            salesRandome.map((elem,idx)=>{
              return <RandomeElement elemR={elem} key={idx}></RandomeElement>
            })
          }
        </div>
    </div>
  )
}

export default SaleRandom