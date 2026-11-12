import React from 'react'
import { Link } from 'react-router-dom'

import car1 from '../../assets/car1.jpg'
import car2 from '../../assets/car2.jpg'
import car3 from '../../assets/car3.jpg'
import car4 from '../../assets/car4.jpg'
import car5 from '../../assets/car5.jpg'
import car6 from '../../assets/car6.jpg'

interface Car {
  id: string
  name: string
  slug: string
  kind: string
  makeName: string
  makeSlug: string
}

interface CarCardProps {
  car: Car
}

const carImages = [
  car1,
  car2,
  car3,
  car4,
  car5,
  car6,
]

export default function CarCard({ car }: CarCardProps) {

  const imageIndex = Number(car.id.split('-')[1]) % carImages.length

  return (
    <Link to={`/cars/${car.id}`}>

      <div className='bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-400 transition cursor-pointer'>

        <img
          src={carImages[imageIndex]}
          alt={car.name}
          className='w-full h-52 object-cover'
        />

        <div className='p-6'>

          <p className='text-blue-400 font-semibold mb-2'>
            {car.makeName}
          </p>

          <h2 className='text-2xl font-bold'>
            {car.name}
          </h2>

          <p className='text-gray-400 mt-2'>
            Type: {car.kind}
          </p>

        </div>

      </div>

    </Link>
  )
}