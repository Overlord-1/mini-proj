import React from 'react'
import down from '../assets/down.png'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <div className="main flex mx-auto items-center justify-between h-screen flex-col bg-gradient-to-b from-blue-400 to-white">
            {/* <img src={top} alt="" /> */}
            <div className='flex mx-auto items-center justify-end md:justify-center h-screen flex-col'>
                {/* <Tractor color='rgb(74 222 128)' size={70} />   //previous used logo*/} 
                <h1 className='text-6xl mb-7 mainText font-bold uppercase'>Kissan</h1>
                <form className='flex flex-col justify-center items-center' >
                    <input type="email" placeholder="Enter your email" className='bg-black text-white p-5 rounded-xl m-3' />
                    <input type="password" placeholder="Enter your password" className='border-green-500  text-white p-5 bg-black rounded-xl m-3' />
                    <button type="submit" className='bg-green-400 w-[150px] p-5 rounded-xl'>Login</button>
                    <div className='mt-4'>Not our part yet ?

                        


                        <a href="/" className='ml-2 text-green-400'>
                            <Link to="/">Sign Up</Link>
                        </a>
                    </div>
                </form>
            </div>

            <img src={down} alt="" className='w-full md:hidden' />  
            {/* This is chahts idea */}
        </div>
    )
}

export default Login