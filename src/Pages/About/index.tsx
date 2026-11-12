import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

export default function About() {

  return (
    <div className='bg-gray-950 min-h-screen text-white'>

      <Navbar />

      <div className='max-w-6xl mx-auto px-6 py-16'>

        <div className='text-center'>

          <h1 className='text-4xl md:text-5xl font-bold'>
            About <span className='text-blue-400'>CarHub</span>
          </h1>

          <p className='text-gray-400 text-lg mt-5 max-w-2xl mx-auto'>
            CarHub is a simple car discovery website where you can explore
            different cars, brands and useful information about them.
          </p>

        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-14'>

          <div className='bg-gray-900 border border-gray-800 rounded-xl p-6'>
            <h2 className='text-2xl font-bold text-blue-400'>
              Explore Cars
            </h2>

            <p className='text-gray-400 mt-3'>
              Browse different car models and discover their basic
              information.
            </p>
          </div>

          <div className='bg-gray-900 border border-gray-800 rounded-xl p-6'>
            <h2 className='text-2xl font-bold text-blue-400'>
              Find Brands
            </h2>

            <p className='text-gray-400 mt-3'>
              Discover cars from different brands and explore their models.
            </p>
          </div>

          <div className='bg-gray-900 border border-gray-800 rounded-xl p-6'>
            <h2 className='text-2xl font-bold text-blue-400'>
              Simple & Easy
            </h2>

            <p className='text-gray-400 mt-3'>
              CarHub is designed to make finding and exploring cars simple
              and easy.
            </p>
          </div>

        </div>

        <div className='bg-gray-900 border border-gray-800 rounded-xl p-8 mt-10 text-center'>

          <h2 className='text-3xl font-bold'>
            Why CarHub?
          </h2>

          <p className='text-gray-400 mt-4 max-w-3xl mx-auto leading-7'>
            Our goal is to create a clean and simple platform for people
            who love cars. You can search for cars, view their details and
            discover different brands in one place.
          </p>

        </div>

        <div className='bg-gray-900 border border-gray-800 rounded-xl p-8 mt-10'>

          <h2 className='text-3xl font-bold text-center'>
            What You Can Do
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>

            <div>
              <h3 className='text-xl font-bold text-blue-400'>
                Search Cars
              </h3>

              <p className='text-gray-400 mt-2'>
                Search for your favorite car by its name or brand.
              </p>
            </div>

            <div>
              <h3 className='text-xl font-bold text-blue-400'>
                View Details
              </h3>

              <p className='text-gray-400 mt-2'>
                Open each car and see more information about it.
              </p>
            </div>

            <div>
              <h3 className='text-xl font-bold text-blue-400'>
                Discover Brands
              </h3>

              <p className='text-gray-400 mt-2'>
                Explore different brands and their available models.
              </p>
            </div>

            <div>
              <h3 className='text-xl font-bold text-blue-400'>
                Easy Navigation
              </h3>

              <p className='text-gray-400 mt-2'>
                Move between pages easily using the CarHub navigation bar.
              </p>
            </div>

          </div>

        </div>

        <div className='text-center mt-16'>

          <h2 className='text-3xl font-bold'>
            Start Exploring <span className='text-blue-400'>CarHub</span>
          </h2>

          <p className='text-gray-400 mt-4'>
            Find your favorite cars and discover something new.
          </p>

        </div>

      </div>

      <Footer />

    </div>
  )
}