import React from 'react'
import shirt from '../components/assets/img/shirt.jpg'
import '../components/assets/css/Details.css'
import {AiOutlineSearch }from 'react-icons/ai'
import {FaTshirt} from 'react-icons/fa'
import Accordion from '../components/Accordion'
import {FiAlertTriangle} from 'react-icons/fi'
import YouMightLike from '../components/YouMightLike'
import RelatedProduct from '../components/RelatedProduct'
import AddToCartModal from '../components/AddToCartModal'
import {useSelector, useDispatch} from "react-redux"
import {useParams} from 'react-router-dom'
import {useState} from 'react'
import { addToCat, adjustItemQty } from '../redux/actions/productsAction'
import { ThreeDots } from 'react-loader-spinner';
import '../components/assets/css/Responsive/Details.css'


import Quantity from '../components/Quantity'
const Details = ({loading}) => {
    let [number,setNumber ] = useState(0)
    let [whole,setWhole ] = useState(0)
    let [color,setColor] = useState(null)
    let [size,setSize] = useState(null)
    let [active,setActive]  = useState(false)



    const products = useSelector(state=>state.allProducts.products)    
    const dispatch = useDispatch()
    const cart = useSelector(state=>state.allProducts.cart)
    
    const [input,setInput] = useState(1)
    // const dispatch = useDispatch()
    


    const onChangeHandler = (e)=>{
         setInput(e.target.value)
         dispatch(adjustItemQty(cart.id, e.target.value)) 
     }

    // console.log(imageProduct)
        
    const {slug} = useParams()

    return (
    <>
    {!loading ?
        products.filter((products)=>products.slug===slug).map((product,index)=>(
          <div key={product.id} className="details m-auto mt-10 w-10/12">
            <div className="details-container  flex gap-10">
                <div className='details-info flex w-7/12 gap-10'>
                    <div className="image-buttons w-2/12">
                        
                        {
                            product?.imageProducts[whole]?.image?.map((image ,index)=>{
                                // console.log(index)
                                return(
                                    <button key={index} className='flex flex-col gap-3' onClick={()=>setNumber(index)}  >
                                        <img src={image.url} alt={image.fileName} />
                                    </button>
                            )
                            })
                        }
                        
                    </div>
                    <div className="main-image  w-10/12 gap-3">
                        <img src={product?.imageProducts[whole]?.image[number]?.url} />
                    </div>
                </div>
                
                    {/* product header  */}

                <div className="products-details w-5/12">
                    {/* product header  */}
                    <div className="product-header-info flex gap-4 justify-between capitalize">
                        <div className="product-name font-medium">
                            <h2 className='text-3xl'>{product.name}</h2>
                            <p className='text-xl mt-2'>{product?.categories[0]?.name}</p>
                        </div>

                        <div className="product-price text-3xl font-bold">
                            ${product.price}
                        </div>
                    </div>
                    {/* product header ending */}
                    
                {/* product changes */}
                    <div className='product-changes'>
                        {/* color start */}
                        <div className="product-color mt-7">
                            {/* using normal css */}
                            <div className="color-header capitalize font-semibold ">
                                <h3>Color</h3>
                            </div>
                            <div className="color-container flex gap-3 mt-2">
                                {
                                    product?.imageProducts.map((color,index)=>{
                                        return(
                                                <div key={index} className="color">
                                                        <div className="colo" >
                                                            <input type="radio" id={color.id} className='radio' name='color' value={`${color.imageColor}`} onClick={()=>setWhole(index)} onChange={e=>setColor(e.target.value)}/>
                                                            <label htmlFor={color.id} style={{backgroundColor:`${color.imageColor}`}}  className='color-label'></label>
                                                        </div>
                                                </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        {/* color ending */}

                        {/* sizes */}
                        <div className="size mt-5">
                            <div className='capitalize font-semibold'>
                                <h3>sizes</h3>
                            </div>
                            <div className="sizes-container flex flex-wrap gap-3 uppercase mt-2">
                                {
                                    product?.sizes.map((size,index)=>{
                                        return (
                                                <div key={index} className='sizes'>
                                                    <input type="radio" id={index} name="radios" value={`${size}`} onChange={e=>setSize(e.target.value)} />
                                                    <label htmlFor={index}>{size}</label >
                                                </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        
                            {/* sizes ending */}
                            {/* <div className="size-guide flex items-center mt-3"> */}
                                {/* <IoShirtOutline/> */}
                                {/* <FaTshirt/> */}
                                {/* <span className='underline'> */}
                                    {/* Size guild */}
                                {/* </span> */}
                            {/* </div> */}

                            {/* quantity to add to cart */}
                            <div className="div flex gap-2 mt-3">
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
                                
                                {/* add to cart ending */}

                                {/* add to cart */}
                            <div className="add-to-cart w-10/12 ">
                                <button type='submit'
                                 className="w-full font-semibold text-white bg-black p-2"
                                  onClick={()=>{
                                    setActive(!active)
                                    return dispatch(addToCat(product.id,parseInt(input),size,color,slug));
                                    
                                }}
                                    >
                                    
                                    Add to cart
                                </button>
                            </div>
                            {/* add to cart ending */}
                            </div>

                        
                    </div>
                    <div className="product-description">
                            <Accordion />
                    </div>
                {/* product changes */}

                {/* report this product */}
                <div className="report gap-2 flex items-center">
                    <FiAlertTriangle/>
                <span>Report this product</span>
                </div>
                {/* report this product ending */}

                <div className='related'>
                    <RelatedProduct product={products}/>
                </div>

            </div>
            </div>
            

            {/* you might also like */}
        <YouMightLike  product={products}/>
            {/* you might also like ending */}
        </div>
        ))
        :
        <div className='flex justify-center w-full'>
            <ThreeDots color='#000'/>

          </div>
    }
        {
            active?
             <AddToCartModal active={active} setActive={setActive} />
             :
             null
        }

    </>
  )
}

export default Details