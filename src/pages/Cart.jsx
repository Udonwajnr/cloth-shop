import React,{useState,useEffect} from 'react'
import shirt from '../components/assets/img/shirt.jpg'
import paypal from '../components/assets/img/paypal.png'
import {useSelector, useDispatch} from "react-redux"
import { addToCat, adjustItemQty } from '../redux/actions/productsAction'
import CartComponent from '../components/CartComponent'
import '../components/assets/css/Responsive/cart.css'



const Cart = () => {
  const cart = useSelector(state=>state.allProducts.cart)
  const [totalPrice,setTotalPrice] =useState(0)
  const [totalItems,setTotalItems] = useState(0)
  



  useEffect(()=>{
    let items = 0
    let price = 0

    cart.forEach((cart)=>{
      items += cart.qty;
      price += cart.qty * cart.price
    });
    setTotalItems(items)
    setTotalPrice(price)
  },[cart,totalPrice,totalItems,setTotalItems,setTotalPrice])

  return (
    <>
      
      <div className='cart mt-10 w-10/12 m-auto flex justify-between gap-5'>
          <div className='w-6/12 g'>
            <div className="cart-header">
              <h2 className='text-3xl font-semibold'>My Cart</h2>
            </div>
                    <div>
                      {
                        cart.length===0
                        ?
                        <p>Cart is empty</p>
                        :
                        cart.map((cart, index)=>(
                          <CartComponent key={index} cart={cart}/>
                        ))
                       
                      }
                    </div>
                {/* cart-items */}
                {/* quantity ending */}
          </div>

          
              {/* summary */}


          <div className='summary bg-stone-100'> 
             <div className="summary-header p-4" >
              <h2 className='text-4xl font-semibold'>Summary</h2>
              <div className="summary-total flex justify-between font-semibold">
                <span>Total</span>
                <span>$ {totalPrice}</span>
              </div>
              <p className='font-normal mt-4'>Shipping and taxes are calculated out checkout</p>
             </div>
             <hr />
             <div className="checkout-btn flex flex-col p-4 gap-4">
              {/* <button  type='button' className='text-white font-semibold py-3 rounded-full bg-black'>CHECKOUT</button> */}
              <button disabled={true} type='button' className='text-black font-semibold bg-white  py-3 border-2 border-stone-400 rounded-full border '><img src={paypal} alt=""className='w-24 m-auto' /></button>
             </div>
         
            <div className="promo bg-white text-center">
              <small> <span className='font-semibold '> Do you have a promo code? </span> Enter it at the next step</small>
            </div>
         </div>
         {/* promo code */}
      </div>
      
    </>
  )
}

export default Cart