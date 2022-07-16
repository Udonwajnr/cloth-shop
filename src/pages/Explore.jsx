import React, {useEffect} from 'react'
import Product from '../components/Product'
import shirt from '../components/assets/img/shirt.jpg'
import { useSelector ,useDispatch} from 'react-redux'
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import '../components/assets/css/Responsive/Explore.css'
const Explore = ({loading}) => {
  
  const products = useSelector(state=>state.allProducts.products)


  return (
    <div className="explore ">
      <div className="explore-header  w-10/12 m-auto mt-10 text-2xl">
        <h2 className='capitalize font-semibold'>Featured products 🔥</h2>
      </div>
    <div className='explore w-10/12 m-auto mt-10'>
      <div className="product-container flex-wrap flex gap-12">

        {!loading?
          products.map((products,index)=>(
            <Product key={products.id} images={products?.imageProducts[0]?.image[0]?.url} categories={products.categories[0]?.name} name={products.name} price={products.price} slug={products.slug}/>
          ))
          :
          <div className='flex justify-center w-full'>
            <ThreeDots color='#000'/>
          </div>

        }
      </div>
    </div>
    </div>
  )
}

export default Explore