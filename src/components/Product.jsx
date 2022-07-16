import React from 'react'
import '../components/assets/css/Product.css'
import shirt from '../components/assets/img/shirt.jpg'
import {Link} from 'react-router-dom'
import '../components/assets/css/Responsive/Related.css'

const Product = ({id,slug,name,images,categories,price,loading}) => {   
  return (
    <>
    <Link to={`/${slug}`}> 
        <div className='product-card w-64 '>
            <div className={`good product-img overflow-hidden flex border`}>
                <img src={images} alt="" />
            </div>
            <div className= "product-bod flex flex-wrap  justify-between">
                <div className="product-info capitalize w-6/12">
                    <span className='title'>{name}</span>
                    <p className='category mt-2 text-sm text-stone-300'>{categories}</p>
                </div>
                <div className="product-price font-bold ">${price}</div>
            </div>
        </div>

    </Link>
      
    </>
  )
}

export default Product