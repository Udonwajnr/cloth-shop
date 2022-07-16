import React,{useState} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { addToCat, adjustItemQty } from '../redux/actions/productsAction'

const Quantity = ({product}) => {
    
    const cart = useSelector(state=>state.allProducts.cart)
    // const products = useSelector(state=>state.allProducts.products)    

    const [input,setInput] = useState(cart.qty)
    const dispatch = useDispatch()
    
    const onChangeHandler = (e)=>{
         setInput(e.target.value)
         dispatch(adjustItemQty(cart.id, e.target.value)) 
     }
   
  return (
    <>
        <div className='w-2/12'>
            {/* <select  id="qty" name="qty" onChange={onChangeHandler} className="bg-transparent border-2 w-full border-stone-300 p-1">
                    <option value='1' >1</option>
                    <option value={input} >2</option>
                    <option value='3' >3</option>
                    <option value='4' >4</option>
                    <option value='5' >5</option>
                    <option value='5' >6</option>
                    <option value='6' >7</option>
                    <option value='7' >8</option>
                    <option value='8' >9</option>
                    <option value='9' >10</option>
                    <option value='10'>11</option>
            </select> */}
         <input 
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />

         </div>

          <div className="add-to-cart w-10/12 ">
                {/* <button type='submit' className="w-full font-semibold text-white bg-black p-2" onClick={()=>dispatch(addToCat(product.id))}> */}
                                    Add to cart
                 {/* </button> */}
             </div>

    </>
  )
}

export default Quantity