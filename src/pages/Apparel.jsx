import React from 'react'
import Product from '../components/Product'
import shirt from '../components/assets/img/shirt.jpg'
import { useSelector ,useDispatch} from 'react-redux'


const Apparel = () => {
  const products = useSelector(state=>state.allProducts.products)

  return (
    <div className='apparel'>
      <div className="explore-header w-10/12 m-auto mt-10 text-2xl">
        <h2 className='capitalize font-semibold'>Apparel</h2>
      </div>
    <div className='explore w-10/12 m-auto mt-10'>
      <div className="product-container grid grid-cols-4 gap-12">
            {
          products.map((products,index)=>(
            <Product key={products.id} images={products?.imageProducts[0]?.image[0]?.url} categories={products.categories[0]?.name} name={products.name} price={products.price} slug={products.slug}/>
          ))
        }
      </div>
    </div>
    </div>
  )
}

export default Apparel