import React,{useEffect,useState} from 'react'


const ModalProduct = ({cart}) => {
  return (
    <>
                   <div className='flex justify-between gap-5 mt-4'>
                      <div className="img">
                        <img src={cart?.imageProducts[0]?.image[0]?.url} className="w-36" alt="" />
                      </div>

                      <div className='flex flex-col  gap-2 '>
                          <h4>{cart.name}</h4>
                          <span className='text-sm'> {cart.categories[0].name}</span>
                          <span className='text-sm'>Size - {cart.size}</span> 
                          <span className='text-sm'>
                          Color - {cart.color} 
                          </span>
                      </div>

                      <div className='flex flex-col  items-center  '>
                          <span className='text-sm'>$ {cart.price}</span>
                          <span className='text-sm'>Qty {cart.qty}</span>
                      </div>
                  </div>
    </>
  )
}

export default ModalProduct