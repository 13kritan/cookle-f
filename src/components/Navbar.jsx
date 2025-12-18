import React from 'react'
import Logo from '../assets/green.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <div className='w-full h-[10%] bg-[#282828] px-20 flex items-center justify-between'>
            <div className="img w-32">
                <img className='w-full cursor-pointer' src={Logo} alt="cookle" />
            </div>

            <div className="flex gap-6 items-center text-white font-body">
                <ul className='flex text-lg font-semibold gap-6'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>Favorites</li>
                </ul>
                <p className="p-2 text-xl bg-neutral-700 rounded-full flex items-center justify-center cursor-pointer"><FontAwesomeIcon  icon={faUser} /></p>
            </div>
        </div>
    )
} 
