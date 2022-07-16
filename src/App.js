import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home';
import Explore from './pages/Explore';
import Apparel from './pages/Apparel';
import Cart from './pages/Cart';
import Search from './pages/Search';
import Details from './pages/Details';
import Checkout from './pages/Checkout';
import request from 'graphql-request'
import { useSelector ,useDispatch} from 'react-redux'
import { setProduct } from './redux/actions/productsAction';

import React,{useEffect,useState} from 'react';
function App() {
  // const products = useSelector(state=>state)
  const dispatch = useDispatch()
  const products = useSelector(state=>state.allProducts.products)
  const cart = useSelector(state=>state.allProducts.cart)
  const [loading,setLoading] = useState(true)

  const product = async()=>{
    const {products} = await request("https://api-eu-west-2.graphcms.com/v2/cl5786sfg4ce101uphnrpglec/master",
    `
      {
  products {
    name
    id
    slug
    description
    price
    imageProducts{
      id
      imageColor
      nameOfProduct
      image{
        id
        url
        fileName
      }
    }
    categories {
      id
      name
    }
    sizes
    productDetails
    material
  }
}
    `
    )
    dispatch(setProduct(products))
  }

  useEffect(()=>{

    product()
    setLoading(!loading)
  },[])
  return (

    <div className="App font-sans	">
      <Navbar cart={cart}/>
        <div className="routes">
          <Routes>
              <Route index path='/' element={<Explore loading={loading}/>}/>
              <Route path='/apparel' element={<Apparel />}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/search' element={<Search/>}/>
              <Route path='/:slug' element={<Details loading={loading}/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='/*' element={<Explore/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
