import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BsSunFill, BsFillMoonFill } from 'react-icons/bs'
import useColorMode from '../hooks/useColorMode'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar() {
  const [ navOpen, setNavOpen ] = useState(false)
  const [ colorMode, setColorMode ] = useColorMode()
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
      logout()
  }

  const navLinks = [
    { id: 1, link: 'Nav Item 1' },
    { id: 2, link: 'Nav Item 2' },
    { id: 3, link: 'Nav Item 3' },
    { id: 4, link: 'Nav Item 4' }
  ]

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 fixed text-text-light dark:text-text-dark bg-navbar-light dark:bg-navbar-dark'>
      <div>
        <h1 className='text-2xl font-signature md:ml-8 text-text-dark dark:text-text-light'>Site title or Logo</h1>
      </div>

      <div className='flex flex-row'>
        <ul className='hidden md:flex'>
          {navLinks.map(({ id, link }) => {
            return(
              <li key={id} className='px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 text-text-dark dark:text-text-light'>
                <Link to={link} smooth duration={500}>{link}</Link>
              </li>
            )
          })}
        </ul>
        {!navOpen && (
          <div onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')} className='cursor-pointer px-16 z-10 focus:outline-none transition-none'>
            {colorMode === 'dark' ? <BsSunFill className='text-text-light' size={25} /> : <BsFillMoonFill className='text-text-dark' size={25} />}
          </div>
        )}
      </div>

      <div onClick={() => setNavOpen(!navOpen)} className='cursor-pointer pr-4 z-10 md:hidden'>
        {navOpen ? <FaTimes className='text-text-dark dark:text-text-light' size={30}/> 
            : <FaBars className='text-text-dark dark:text-text-light' size={30}/> }
      </div>

      {/* Fullscreen Mobile Popup Nav */}
      {navOpen && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 
          w-full h-screen bg-navbar-light dark:bg-navbar-dark'>
          {navLinks.map(({ id, link }) => {
            return(
              <li key={id}
              className='px-4 cursor-pointer capitalize text-4xl py-6
            hover:scale-105 duration-200 text-text-dark dark:text-text-light'>
              <Link 
              onClick={() => setNavOpen(!navOpen)}
              to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}