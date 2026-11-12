import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../Store/Slice/AuthSlice'

export default function Navbar() {

  const dispatch = useDispatch()

  const handleLogout = () => {
    localStorage.removeItem('token')
    dispatch(logout())
    window.location.href = '/'
  }

  return (
    <nav className='bg-black border-b border-blue-400/30 px-6 py-4'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>

        <Link
          to='/home'
          className='text-2xl font-bold text-blue-400'
        >
          CarHub
        </Link>

        <div className='flex items-center gap-8'>

          <Link
            to='/home'
            className='text-white hover:text-blue-400 transition'
          >
            Home
          </Link>

          <Link
            to='/cars'
            className='text-white hover:text-blue-400 transition'
          >
            Cars
          </Link>

          <Link
            to='/about'
            className='text-white hover:text-blue-400 transition'
          >
            About
          </Link>

          <button
            onClick={handleLogout}
            className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400 transition'
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  )
}