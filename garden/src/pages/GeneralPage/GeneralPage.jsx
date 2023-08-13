import React from 'react'; 
import "./generalPage.css";
import EveryProduct from './EveryProduct/EveryProduct';
import { useSelector,useDispatch } from 'react-redux';
import { fromData , toData , checkData , sortedData } from '../../reduxStore/slice/inputSlice';


const GeneralPage = ({title,data}) => {

const dispatcher = useDispatch();
const from1 = useSelector((state)=>state.inputs);
const {from , to , check2 , sorted } = from1
let final = [];
if(sorted.length === 0){
  final = data
}else{
  final = sorted
};

const fromFunction = (e)=>{
  const data = e.target.value;
  dispatcher(fromData(data))
}
const toFunction =(e)=>{
  const data =e.target.value;
  dispatcher(toData(data))
}
const checkFunction = ()=>{
  dispatcher(checkData())
}
const sortedFunction = (e)=>{
  const data22 = e.target.value;
  const send = {
    status: data22,
    data1: data
  }
  dispatcher(sortedData(send))
}

return (
        <div className='tools'>
            < h2 className='titleTools'>{title}</h2>
            <form className='toolsForm'>
                <p className='toolPrice'>Price</p>
                     <input  onChange={fromFunction}  className='from' type='text' placeholder='from'/>
                     <input  onChange={toFunction} className='to' type='text' placeholder='to' />
                <p className='disItems'>Discounted items</p>
                     <input onChange={checkFunction} className='checkBox' type='checkBox'/>
                <p className='sortedTools'>Sorted</p>
                    <input onChange={sortedFunction} className='sortedInput' placeholder='by default' type='text'/>
            </form>
            <div className='toolContainer'>
            {

              final && final.map((elem , idx)=>{
                if(elem.price >= from && elem.price <= to && elem.discont_price >= check2){
              return <EveryProduct index={idx} element = {elem} key={idx}>{}</EveryProduct>
            }else{
              return null
            }
            })
           }
            </div>
        </div>
      )
    }
    

export default GeneralPage