import React,{useState} from 'react'
import '../components/assets/css/YouMightLike.css'
import shirt from '../components/assets/img/shirt.jpg'
import shirt2 from '../components/assets/img/shirt2.jpeg'
import shirt3 from '../components/assets/img/shirt3.jpg'
import shirt5 from '../components/assets/img/shirt5.jpg'

import Product from './Product'
  // const cart = useSelector(state=>state.allProducts.cart)


const YouMightLike = ({product}) => {
  // const [category,setCategory] = useState(product.categories[0]?.name)
  

  // return (
  //   <div className='mt-5'>
  //       <h1 className='text-center text-2xl font-semibold'>You might also </h1>
  //       <div className='you-might-like flex justify-center gap-3 mt-3'>
              {/* {
                product?.filter((product)=>product.categories[0]?.name === category?
                (
                               <div className='selected-product'>
                                        <Product key={product.id} images={product?.imageProducts[0]?.image[0]?.url} categories={product.categories[0]?.name} name={product.name} price={product.price} slug={product.slug}/>     
                              </div>
                )
                :
                null
                )
              } */}
    //     </div>
    // </div>
  
}

export default YouMightLike