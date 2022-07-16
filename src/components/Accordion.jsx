import React, { useState } from 'react'
import '../components/assets/css/Accordion.css'
import {FiMinus} from 'react-icons/fi'
import {FiPlus} from 'react-icons/fi'
import { data } from './data'

const Accordion = () => {
    const [click,setClick] = useState(false)

    const toggle=(i)=>{
       
        if(click === i){
        return setClick(null)
        }

        setClick(i)
    }
  return (
    <div className='mt-4'>
        {
            data.map((data,i)=>{
                return(
            <div key={i}  className="accordion border-b transition cursor-pointer mb-3" onClick={()=>toggle(i)}>
                <div className="header text-gray-600 hover:text-black flex justify-between items-center">
                    <h4 className='py-3'>{data.question}</h4>
                    <span>
                        {
                        click === i ?<FiMinus/>:<FiPlus/>
                        }
                    </span>
                </div>
                
                <div className={click===i?"text-sm show transition-all my-3 text-gray-600 h-auto duration-300": 'accordion-body h-0 text-sm   transition-all overflow-hidden'}>
                            <p>{data.answer}</p>
                    </div>
            
        </div>
                )
            })
            
        }
  
    </div>
  )
}

export default Accordion