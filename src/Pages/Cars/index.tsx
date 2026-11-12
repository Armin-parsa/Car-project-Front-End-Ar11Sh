import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import CarCard from '../CarCards'

interface Car {
  id: string
  name: string
  slug: string
  kind: string
  makeName: string
  makeSlug: string
}

interface Make {
  name: string
  slug: string
  models: {
    name: string
    slug: string
    kind: string
  }[]
}

function Cars() {

  const [cars, setCars] = useState<Car[]>([])
  const [search, setSearch] = useState('')
  const [brand, setBrand] = useState('All Brands')

  const getCars = async () => {

    const res = await fetch(
      'https://cdn.jsdelivr.net/gh/vehiclesdb/vehiclesdb@latest/dist/vehicles.json'
    )

    const data = await res.json()

    const allCars: Car[] = data.makes.flatMap(
      (make: Make, makeIndex: number) =>
        make.models
          .filter((model) => model.kind === 'car')
          .map((model, modelIndex: number) => ({
            id: `${makeIndex}-${modelIndex}`,
            name: model.name,
            slug: model.slug,
            kind: model.kind,
            makeName: make.name,
            makeSlug: make.slug,
          }))
    )

    setCars(allCars.slice(0, 200))
  }

  useEffect(() => {
    getCars()
  }, [])

  const brands = [...new Set(cars.map((car) => car.makeName))]

  const filteredCars = cars.filter((car) =>
    (
      car.name.toLowerCase().includes(search.toLowerCase()) ||
      car.makeName.toLowerCase().includes(search.toLowerCase())
    ) &&
    (
      brand === 'All Brands' ||
      car.makeName === brand
    )
  )

  return (
    <div className='bg-gray-950 min-h-screen text-white'>

      <Navbar />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16'>

        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center'>
          Explore <span className='text-blue-400'>Cars</span>
        </h1>

        <div className='max-w-xl mx-auto mt-8'>

          <input
            type='text'
            placeholder='Search car or brand...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='w-full bg-gray-900 border border-gray-800 rounded-lg px-4 sm:px-5 py-3 text-white outline-none focus:border-blue-400'
          />

        </div>

        <div className='max-w-xl mx-auto mt-4'>

          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className='w-full bg-gray-900 border border-gray-800 rounded-lg px-4 sm:px-5 py-3 text-white outline-none focus:border-blue-400'
          >

            <option value='All Brands'>
              All Brands
            </option>

            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}

          </select>

        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12'>

          {filteredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
            />
          ))}

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default Cars