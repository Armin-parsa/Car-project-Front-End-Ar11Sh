import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

import car1 from '../../assets/2027_bmw_7-series_sedan_740-xdrive_fq_oem_1_1600.jpg'
import car2 from '../../assets/2027_bmw_7-series_sedan_740-xdrive_fq_oem_1_1600.jpg'
import car3 from '../../assets/2027_bmw_7-series_sedan_740-xdrive_fq_oem_1_1600.jpg'
import car4 from '../../assets/2027_bmw_7-series_sedan_740-xdrive_fq_oem_1_1600.jpg'
import car5 from '../../assets/2027_bmw_7-series_sedan_740-xdrive_fq_oem_1_1600.jpg'
import car6 from '../../assets/2027_bmw_7-series_sedan_740-xdrive_fq_oem_1_1600.jpg'

interface Car {
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

const carImages = [
  car1,
  car2,
  car3,
  car4,
  car5,
  car6,
]

function CarsDetails() {

  const { id } = useParams()

  const [car, setCar] = useState<Car | null>(null)

  const getCar = async () => {

    const res = await fetch(
      'https://cdn.jsdelivr.net/gh/vehiclesdb/vehiclesdb@latest/dist/vehicles.json'
    )

    const data = await res.json()

    const [makeIndex, modelIndex] = (id || '').split('-').map(Number)

    const make: Make = data.makes[makeIndex]
    const model = make.models[modelIndex]

    setCar({
      name: model.name,
      slug: model.slug,
      kind: model.kind,
      makeName: make.name,
      makeSlug: make.slug,
    })
  }

  useEffect(() => {
    getCar()
  }, [id])

  const imageIndex = Number(id?.split('-')[1]) % carImages.length

  return (
    <div className='bg-gray-950 min-h-screen text-white'>

      <Navbar />

      <div className='max-w-6xl mx-auto px-6 py-16'>

        <Link
          to='/cars'
          className='text-blue-400'
        >
          ← Back to Cars
        </Link>

        {car && (

          <div className='bg-gray-900 border border-gray-800 rounded-xl overflow-hidden mt-10'>

            <img
              src={carImages[imageIndex]}
              alt={car.name}
              className='w-full h-80 object-cover'
            />

            <div className='p-8'>

              <p className='text-blue-400 text-lg'>
                {car.makeName}
              </p>

              <h1 className='text-4xl font-bold mt-2'>
                {car.name}
              </h1>

              <p className='text-gray-400 mt-3'>
                Type: {car.kind}
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-8'>

                <div className='bg-gray-950 p-5 rounded-lg'>
                  <p className='text-gray-500'>
                    Brand
                  </p>

                  <p className='text-xl font-bold mt-2'>
                    {car.makeName}
                  </p>
                </div>

                <div className='bg-gray-950 p-5 rounded-lg'>
                  <p className='text-gray-500'>
                    Type
                  </p>

                  <p className='text-xl font-bold mt-2'>
                    {car.kind}
                  </p>
                </div>

              </div>

            </div>

          </div>

        )}

      </div>

      <Footer />

    </div>
  )
}

export default CarsDetails