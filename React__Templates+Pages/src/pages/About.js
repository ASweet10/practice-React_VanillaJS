import React from 'react'
import plane from '../images/plane.jpg'
import { aboutData } from '../data/aboutData'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-28 bg-home-bg w-full h-full'>
      <h3 className='text-4xl pb-6'>Travel Planning Experts</h3>
      <img className='w-2/3 h-full' src={plane} alt="plane" />
      <h3 className='text-4xl pt-6'>About Long Time No Sea</h3>
      <p className='text-center pt-4 w-3/5'>We are a modern travel agency that also caters to classic sensibilities.
        Our driven team of experts come from a variety of backgrounds and have experience planning and taking trips
        all over the world. We harness the power of data to give you insider perks you won't find anywhere else.
     </p>
     <h3 className='text-4xl pb-8 pt-8'>Meet The Team</h3>
     <div className='grid gap-12 sm:grid-cols-2 lg:grid-cols-3'>
      { aboutData.map(({ id, name, title, src, alt }) => {
        return(
          <div className='justify-center items-center border-solid border-2 border-black p-4 rounded-md' key={id}>
            <h3>{name}</h3>
            <img src={src} alt={alt} /> 
            <p>{title}</p>
          </div>
        )
      })}
     </div>
    </div>
  )
}

export default About