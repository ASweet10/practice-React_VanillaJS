import React from 'react'
import { faqData } from '../data/faqData'
import Accordion from '../components/Accordion'

const FAQ = () => {

  return (
      <div className='flex flex-col content-between items-center justify-center pt-28 w-screen h-full bg-home-bg'>
        <div><h2 className='text-center text-4xl pb-4 pt-4'>FAQ</h2></div>
        <div className='w-2/3'>
          { faqData.map(({ id, question, answer }) => {
              return(
                <Accordion key={id} question={question} answer={answer} />
              )})
          }
        </div>
      </div>
  )
}

export default FAQ