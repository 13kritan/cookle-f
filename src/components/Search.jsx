import Bg from '../assets/food.jpg'
import Paper from '../assets/pngpaper.png'
import Food from '../assets/dwn.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Search({setSearchPage}) {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  return (
    <>
    <div className="relative w-full md:min-h-[25vh] min-h-[20vh] overflow-hidden bg-slate-500">

      <div className="absolute w-full h-full md:pl-16 sm:pl-3 py-6 space-y-2"
        style={{
          backgroundImage: `url(${Bg})`,
        }}>
        <div className='xs:hidden md:block w-1/2 flex flex-col font-bold text-left text-5xl text-green-600 tracking-wider [text-shadow:1px_1px_0_black,-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black]'>
          <h3 className=''>Taste The </h3>
          <span>World</span>
        </div>
        <p className='xs:hidden md:block text-blue-700 w-1/2 text-left font-body text-md font-semibold [text-shadow:1px_1px_0_white,-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white]'>Unlock endless flavors with smart search.</p>

      </div>

      {/* Search Bar and Rounded Circle */}
      <div className='md:w-2/3 w-3/4 h-full absolute right-0 py-4 flex flex-col items-center gap-1'
        style={{
          backgroundImage: `url(${Food})`,
          backgroundSize: "cover",
          backgroundPosition: "center",

          WebkitMaskImage: `url(${Paper})`,
          WebkitMaskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",

          maskImage: `url(${Paper})`,
          maskSize: "100% 100%",
          maskRepeat: "no-repeat",

        }}
      >
        <h1 className="flex flex-col text-white font-extrabold text-left lg:text-4xl md:text-3xl tracking-wide w-1/2">
          Culinary Journey
          <span>Awaits</span>
        </h1>
        <p className="w-1/2 text-xs tracking-wide text-gray-300 text-left">Cook with passion</p>
        <div className='mt-2 w-1/2 relative'>
          <FontAwesomeIcon className='absolute top-1/2 -translate-y-1/2 left-5'
            onClick={() => navigate(`/search?q=${encodeURIComponent(search)}`)}
            icon={faMagnifyingGlass} />
          <input onChange={(e) => setSearch(e.target.value) }
            className='rounded-lg bg-gray-200 px-4 pl-12 py-2 outline-none w-full'
            placeholder='Search a recipe'
            type="text" />
        </div>

      </div>

    </div>
    </>
  );
}
