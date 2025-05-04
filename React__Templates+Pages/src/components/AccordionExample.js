import React, { useState } from 'react'
import { MdAdd } from 'react-icons/md'
import { BiMinus } from 'react-icons/bi'

const AccordionExample = ( props ) => {
    const [ show, setShow ] = useState(false)

  return (
    <div className='p-2 bg-transparent text-left w-full rounded-md'>
        <div className='flex flex-col'>
            <div className='text-black flex justify-between items-center' onClick={() => setShow(!show)}>
                <h3 className='cursor-pointer'>{props.question}</h3>

                { show ? (<BiMinus className='mr-4 cursor-pointer h-6 w-6 mb-4' onClick={() => setShow(!show)}/>) 
                    : (<MdAdd className='mr-4 cursor-pointer h-6 w-6 mb-2' onClick={() => setShow(!show)}/>) }

            </div>
            {show && (<p>{props.answer}</p>)}  

        </div>
        <hr className="h-[1px] my-8 bg-gray-700 border-0"></hr>
    </div>
  )
}

export default AccordionExample