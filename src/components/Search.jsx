import Bg from '../assets/food.jpg'
import Paper from '../assets/pngpaper.png'
import Food from '../assets/dwn.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
  return (
    <div className="relative w-full h-[40%] overflow-hidden  bg-slate-500">
      
      <div className="absolute w-full h-full pl-16 py-6 space-y-2"
        style={{
          backgroundImage: `url(${Bg})`,
        }}>
          <div className='w-1/2 flex flex-col font-bold text-left text-5xl text-green-600 tracking-wider [text-shadow:1px_1px_0_black,-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black]'>
            <h3 className=''>Taste The </h3>
            <span>World</span>
          </div>
          <p className='text-blue-700 w-1/2 text-left font-body text-md font-semibold [text-shadow:1px_1px_0_white,-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white]'>Unlock endless flavors with smart search.</p>

        </div>

{/* Search Bar and Rounded Circle */}
      <div className='w-2/3 h-full absolute right-0 py-4 flex flex-col items-center gap-2'
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
        <h1 className="flex flex-col text-white mt-2 font-extrabold text-left text-4xl tracking-wide w-1/2">
          Culinary Journey
          <span>Awaits</span>
        </h1>
        <p className="w-1/2 text-xs tracking-wide text-gray-300 text-left">Cook with passion</p>
        <div className='mt-6 w-1/2 relative'>
          <FontAwesomeIcon className='absolute top-1/2 -translate-y-1/2 left-5' icon={faMagnifyingGlass} />
          <input className='rounded-lg bg-gray-200 px-4 pl-12 py-2 outline-none w-full' placeholder='Search a recipe' type="text" />
        </div>

      </div>

    </div>
  );
}
