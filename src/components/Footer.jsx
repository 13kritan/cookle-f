import React from 'react'
import Logo from '../assets/white.png'

export default function Footer() {
  return (
    <div className='h-[10vh] bg-blue-600 px-16 flex gap-10'>
      <div className="w-[30%] flex flex-col justify-center">
        <img className='w-24' src={Logo} alt="Logo" />
        <p className='text-gray-200 text-left text-sm'>Powered by React, Tailwind and MealDB API</p>
      </div>

      <div className="w-[30%] ">

      </div>
    </div>
  )
}
