import React from 'react'
import {AiOutlineSearch }from 'react-icons/ai'
import { Link } from 'react-router-dom'
import '../components/assets/css/Search.css'
import {useSelector,useDispatch} from 'react-redux'
import { decrement } from '../redux/actions/productsAction'
import { increment } from '../redux/actions/productsAction'
const Search = () => {
  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch()
  console.log(counter)
  return (
    <div className='search absolute top-0 w-full h-full bg-white'>
      <div className='search-container mt-10 mx-5'>
        <div className="search-header flex justify-end">
          <Link to={'/'}>
            <button className='font-medium--dark text-3xl' >Close</button>
          </Link>
        </div>
        <div className="search-keyword mt-24">
          <h4 className='font-semibold text-xl'>Search</h4>
          <p className='mt-3'>Type keywords to search</p>
        </div>

        <form action="" className='flex mt-20 form'>
          <div className="search-input w-full">
            <input className='w-full form-input focus:outline-none  text-5xl border-b-slate-300 border-t-0 border-l-0 border-r-0  border' placeholder="Search everything" type="search" />
          </div>
          <button type='Submit'>
                <AiOutlineSearch size={25}/>
          </button>
        </form>
        <p>{counter}</p>
        <button className='bg-red-500' onClick={(()=>dispatch(increment(10)))}>1</button>
        <br />
        <button className='bg-red-200' onClick={()=>{dispatch(decrement(200))}}>2</button>
      </div>

    </div>
  )
}

export default Search