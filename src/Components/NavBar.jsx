import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='flex justify-around shadow p-4 '>
       {/* Logo Movie */}
       <div>
        <Link to="/" className='text-2xl text-pink-600'>Movie App</Link>
       </div>
       {/* navbar */}
       <div className='flex gap-4'>
        <Link to={"/"} className='hover:text-pink-400 text-xl'>Home</Link>
        <Link to={"/favorite"} className='hover:text-pink-400 text-xl'>Favorite</Link>
       </div>
    </div>
  )
}
