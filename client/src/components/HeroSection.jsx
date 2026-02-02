import { Calendar1Icon, ClockIcon } from 'lucide-react'
import React, { use } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate=useNavigate();
  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen '>
        <img src={assets.marvelLogo} alt="hero-image" className='max-h-11 lg:h-11 mt-20 '/>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold max-w-110'>Guardians <br /> of the Galaxy</h1>
        <div className='flex items-center gap-4 text-gray-600'>
            <span>
                Action | Adventure | Sci-Fi
            </span>
            <div className='flex items-center gap-1'>

                <Calendar1Icon className='w-4.5 h-4.5' />2018
            </div>

             <div className='flex items-center gap-1'>

                <ClockIcon className='w-4.5 h-4.5' />2hrs 8min
            </div>



        </div>
        <p className='max-w-md text-gray-300'>A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.</p>
        <button onClick={()=>navigate('/movies')} className='px-6 py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer mt-2'>Explore Movies</button>      
    </div>
  )
}

export default HeroSection
