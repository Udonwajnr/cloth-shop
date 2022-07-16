import React from 'react'
import '../components/assets/css/RelatedProduct.css'
import Product from './Product'
const RelatedProduct = ({product}) => {
  return (
    <div className='mt-5 mb-10 '>
        <h4 className='uppercase font-semibold text-stone-300'>Other products</h4>
        {/* other products */}
                <div className="other-products mt-3">
                    <div className='flex other-producte flex-wrap gap-3 '>
                      {
                        product.slice(0,3).filter((products)=>products?.categories[0]?.name===products?.categories[0]?.name).map((products,index)=>{
                          return (
                        
                              <div key={index} className='selected-product' >
                                      <input type="radio" id={index} name="radios" value={products.name}/>
                                      <label htmlFor={index} className='w-40'>
                                        <Product key={products.id} images={products?.imageProducts[0]?.image[0]?.url} categories={products.categories[0]?.name} name={products.name} price={products.price} slug={products.slug}/>     
                                      </label>
                              </div>
                          )
                        })
                      }
                  </div>     
                </div>
            {/* other products ending */}
    </div>
  )
}

export default RelatedProduct