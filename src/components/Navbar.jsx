import React, { useState, useEffect } from 'react'
import Logo from '../assets/green.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {getMe} from '../utils/authAPI'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [user, setUser] = useState(null);
    const navigate = useNavigate()
    // Load user from localStorage
    useEffect(() => {
        const fetchUser = async () => {
            const getUser =await getMe()
            console.log(getUser.data)
            if (getUser) setUser(getUser.data);
        }
        fetchUser()
       
    }, []);

    const logout = () => {
        localStorage.removeItem("token"); // remove token & user info
        navigate('/auth')
        setUser(null);
    };
    return (
        <div className='w-full h-[10vh] bg-[#282828] md:px-20 sm:px-10 xs:px-4 flex items-center justify-between'>
            <div className="img md:w-32 w-24">
                <img className='w-full cursor-pointer' src={Logo} alt="cookle" />
            </div>

            <div className="flex gap-6 items-center text-white font-body">
                <ul className='flex md:text-lg xs:text-sm font-semibold gap-6'>
                    <li className='cursor-pointer' onClick={() => navigate("/")}>Home</li>
                    <li className='cursor-pointer' onClick={() => navigate("/favorite")}>Favorites</li>
                </ul>
                <div className="icon">
                    <p onClick={() => setOpen(!open)} className="p-2 md:text-xl xs:text-sm bg-neutral-700 rounded-full flex items-center justify-center cursor-pointer"><FontAwesomeIcon icon={faUser} /></p>
                    {/* Dropdown */}
                    {open && (
                        <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-10">
                            <div className="px-4 py-2 border-b">
                                <p className="font-semibold">{user?.name}</p>
                                <p className="text-sm text-gray-500">{user?.email}</p>
                            </div>
                            <button
                                onClick={logout}
                                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
} 
