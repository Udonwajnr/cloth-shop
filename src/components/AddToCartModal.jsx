import React,{useEffect,useState} from 'react'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import '../components/assets/css/AddToCartModal.css'
import shirt from '../components/assets/img/shirt.jpg'
import {BsArrowRight} from 'react-icons/bs'
import {useSelector, useDispatch} from "react-redux"
import { Link } from 'react-router-dom'
import ModalProduct from './ModalProduct'
import '../components/assets/css/Responsive/AddToCartModal.css'

const AddToCartModal = ({active,setActive}) => {
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
        <div className='modal fixed w-full overlay bg-blend-overlay justify-end top-0  z-10 h-full' onClick={()=>setActive(!active)}>

            <div className='w-4/12 modal-div ml-auto bg-white p-4'>
                <div className='flex items-center gap-1'>
                    <span>{cart.length} item added to my cart </span>
                     <IoMdCheckmarkCircleOutline/>
                </div>

                {/* items */}
                {
                  cart.map((cart,index)=>(
                    <ModalProduct key={index} cart={cart}/>
                  ))
         

                }
                {/* items ending */}

                <hr className='mt-4' />
                
                <div className="font-semibold mt-4 modal-total flex justify-between">
                   <span>Total</span>
                   <span>$ {totalPrice}</span>
                </div>
              
                <p className='mt-4 text-sm'>Delivery calculated at checkout</p>
              
                <div className="modal-checkout mt-4 gap-3 flex flex-col">
                    <button className='font-semibold py-3  bg-black'>
                         <Link to={'/cart'} className='flex justify-center gap-2 items-center text-white'>
                           <span>Proceed to Checkout</span>
                          <BsArrowRight/>
                        </Link>
                    </button>
                      <button onClick={()=>setActive(!active)} className='py-3 text-stone-400'>Continue shopping</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddToCartModal