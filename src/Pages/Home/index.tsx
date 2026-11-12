import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'


function Home() {
  return (
    <div className='bg-gray-950 min-h-screen text-white'>

      <Navbar />

      
      <section className='min-h-[600px] flex items-center'>
        <div className='max-w-7xl mx-auto px-6 w-full'>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>

            <div>
              <p className='text-blue-400 font-semibold text-lg mb-4'>
                WELCOME TO CARHUB
              </p>

              <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
                Find Your
                <span className='text-blue-400'> Dream Car</span>
              </h1>

              <p className='text-gray-400 text-lg mt-6 max-w-xl leading-7'>
                Explore different cars, discover popular brands and find
                detailed information about the cars you love.
              </p>

              <Link
                to='/cars'
                className='inline-block bg-blue-500 text-white px-8 py-3 rounded-lg mt-8 font-bold hover:bg-blue-400 transition'
              >
                Explore Cars
              </Link>
            </div>

            <div className='flex justify-center'>
              <img
                src='src/assets/2027_bmw_7-series_sedan_740-xdrive_fq_oem_1_1600.jpg'
                alt='Sports Car'
                className='w-full max-w-xl rounded-2xl shadow-2xl object-cover'
              />
            </div>

          </div>

        </div>
      </section>

      {/* Popular Brands */}
      <section className='py-16 bg-black'>

        <div className='max-w-7xl mx-auto px-6'>

          <h2 className='text-3xl font-bold text-center'>
            Popular <span className='text-blue-400'>Brands</span>
          </h2>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-10'>

            <div className='border border-gray-800 rounded-xl p-6 text-center hover:border-blue-400 transition'>
              <h3 className='text-xl font-bold'>BMW</h3>
            </div>

            <div className='border border-gray-800 rounded-xl p-6 text-center hover:border-blue-400 transition'>
              <h3 className='text-xl font-bold'>Mercedes</h3>
            </div>

            <div className='border border-gray-800 rounded-xl p-6 text-center hover:border-blue-400 transition'>
              <h3 className='text-xl font-bold'>Ferrari</h3>
            </div>

            <div className='border border-gray-800 rounded-xl p-6 text-center hover:border-blue-400 transition'>
              <h3 className='text-xl font-bold'>Porsche</h3>
            </div>

          </div>

        </div>

      </section>

      {/* Explore Section */}
      <section className='py-16'>

        <div className='max-w-7xl mx-auto px-6 text-center'>

          <h2 className='text-3xl font-bold'>
            Discover Your Next <span className='text-blue-400'>Car</span>
          </h2>

          <p className='text-gray-400 mt-4 max-w-2xl mx-auto'>
            Browse our collection of cars and discover their specifications,
            brands and other useful information.
          </p>

          <Link
            to='/cars'
            className='inline-block bg-blue-500 text-white px-8 py-3 rounded-lg mt-7 font-bold hover:bg-blue-400 transition'
          >
            View All Cars
          </Link>

        </div>

      </section>

      <Footer />

    </div>
  )
}

export default Home