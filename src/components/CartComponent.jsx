import React,{useState,} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { addToCat, adjustItemQty } from '../redux/actions/productsAction'



const CartComponent = ({cart}) => {
  const [input,setInput] = useState(cart.qty)
  const dispatch = useDispatch()
  

   const onChangeHandler = (e)=>{
         setInput(e.target.value)
         dispatch(adjustItemQty(cart.id, e.target.value)) 
     }
  
    return (
    <div className="cart-container mt-7 flex gap-10">
        <div className="cart-items flex gap-3  pr-5">
                        <div className="cart-img w-36 ">
                          <img src={cart?.imageProducts[0]?.image[0]?.url}  alt="" />
                        </div>

                        <div className="cart-body">
                          <h2 className='text-xl capitalize'>{cart.name} </h2>
                          <p className='text-stone-400'>{cart.categories[0].name}</p>
                          <p className='mt-2 text-stone-400 text-sm'>Size – {cart.size}</p>
                          <p className='text-`stone-400 text-sm'>Color – {cart.color}</p>
                          <button className='text-stone-600  underline mt-2'>Remove</button>
                        </div>
                      </div>

                      {/* quantity */}
                      <div className='flex gap-10 h-16 items-center'>
                        <div className="cart-quantity">
                             <input 
                                    min="1"
                                     type="number"
                                     id="qty"
                                     name="qty"
                                      className='border-2 focus:outline-none'
                                       value={input}
                                            onChange={onChangeHandler}
                                            maxLength={5}
                                        />
                        </div>
                        

                        <div className="cart-price text-xl">
                          <span className='flex gap-1'>
                            <p>$</p> {cart.price}
                            
                            </span>
                        </div>
                      </div>
    </div>
  )
}

export default CartComponent