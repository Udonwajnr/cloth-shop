import React,{useEffect,useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {BsBag} from 'react-icons/bs'
import '../components/assets/css/Navbar.css'
import {AiOutlineSearch }from 'react-icons/ai'
import '../components/assets/css/Responsive/Navbar.css'


const Navbar = ({cart}) => {
    const [cartCount, setCartCount] = useState(0)
    useEffect(()=>{
        let count = 0
        cart.forEach(cart => {
            count +=cart.qty
        });
        setCartCount(count)
    },[cart,cartCount])

    
  return (
    <header className='bg-black navbar text-white p-4'>
        <nav className='flex justify-between items-center'>
            <div className="logo text-2xl tracking-wider">
                <Link to='/'>
                    <h1>developedbyjunior</h1>
                </Link>
            </div>
            <div className="exploreAndAppeal flex justify-between">
                <NavLink to='/' className={'mx-3 px-1 py-1'}>
                    {
                        ({isActive})=>(
                            <span className={
                                isActive?'border-2 border-white px-2 py-2':' px-2 py-2'
                            }>
                                Explore
                            </span>
  )
                    }
                </NavLink>

                {/* <NavLink to='/apparel' className={'mx-3 px-1 py-1'}>
                        {
                        ({isActive})=>(
                            <span className={
                                isActive?'border-2 border-white px-2 py-2':' px-2 py-2'
                            }>
                                Apparel
                            </span>
  )
                    }
                </NavLink> */}

            </div>
                    

                <div className="cartItem ">
                    {/* <div className="line mx-2"></div>
                    <Link to={'/search'}>
                        <div className="search-icon mx-2">
                            <AiOutlineSearch size={25}/>
                        </div>
                    </Link> */}

                  <Link to={'/cart'} className='capitalize'>
                    <div className="cart flex justify-between items-center border rounded-md w-24 p-1 mx-2">
                        <BsBag size={25} className="basket"/>
                        <span>cart</span>
                        -
                        <span>{cartCount}</span>
                    </div>
                </Link>

            </div>
        </nav>
    </header>
  )
}

export default Navbar