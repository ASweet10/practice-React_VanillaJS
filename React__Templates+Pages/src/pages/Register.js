import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRegister } from '../hooks/useRegister'
import { IconContext } from 'react-icons'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'

const Register = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const { register, isLoading, error } = useRegister()

    const handleSubmit = async (e) => {
        e.preventDefault() // Default behavior is page refresh, disable
        await register( email, password )
    }
    
    return(
        <div className='bg-cover bg-register-img justify-center items-center h-screen w-screen'>
            <form className="flex flex-col justify-center items-center w-full h-full" onSubmit={ handleSubmit }>
                <h2 className='text-4xl p-2 text-white'>Register</h2>
                <label className='pr-32 text-xl text-white'>Email</label>
                <div className='flex justify-end items-center relative'>

                    <input onChange={(e) => setEmail(e.target.value)} // (e) is value supplied by input
                        className='h-8 rounded-md p-1 outline-none border-none'
                        value={ email }
                        type="email" // Expects email, not string
                        placeholder='Email'
                    />
                    <IconContext.Provider value={{color: 'gray', size: '10px'}}>
                        {/* width: placement within box; height: size of image */}
                        <AiOutlineMail className='absolute w-1/5 h-4'/>
                    </IconContext.Provider>
                </div>

                <label className='pr-24 pt-4 text-xl text-white'>Password</label>
                <div className='flex justify-end items-center relative pb-4'>
                    <input onChange={(e) => setPassword(e.target.value)}
                        className='h-8 rounded-md p-1 outline-none border-none'
                        value={ password }
                        type="password" // Hides with *** while typing
                        placeholder='Min. 8 characters' 
                    />
                    <IconContext.Provider value={{color: 'gray', size: '10px'}}>
                    {/* width: placement within box; height: size of image */}
                        <RiLockPasswordLine className='absolute w-1/5 h-4'/>
                    </IconContext.Provider>
                </div>

                {/* If registration still loading, disable button */}
                <button onClick={() => handleSubmit()} disabled={isLoading}
                    className='bg-button hover:bg-button-hover rounded-md px-3 py-2 text-white cursor-pointer'
                >
                    Register
                </button>
                {error && <div className='error'>{error}</div>}
            </form>
        </div>
    )
}
export default Register