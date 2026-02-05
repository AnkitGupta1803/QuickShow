import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import BlurCircle from '../components/BlurCircle';
import { Heart, PlayCircle, StarIcon } from 'lucide-react';
import timeFormat from '../lib/timeFormat';
import DateSelect from '../components/DateSelect';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

const MovieDetais = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const navigate=useNavigate();

  const getShow = async () => {

    const show = dummyShowsData.find(show => show._id === id)
    if(show){
    setShow({
      movie: show,
      dateTime: dummyDateTimeData
    })
  }

  }

  useEffect(() => {
    getShow();
  }, [id])

  return show ? (
    <div className='px-6 md:px-16 lg:px-40 pt-30 md:pt-50'>
      <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto' >
        <img src={show.movie.poster_path} alt={show.movie.title} className='max-md:mx-auto rounded-xl h-104 max-w-70 object-cover' />
        <div className='flex flex-col gap-3 relative'>
          <BlurCircle top="-100px" right="-100px" />
          <p className='text-primary'>English</p>
          <h1 className='text-3xl md:text-5xl font-bold'>{show.movie.title}</h1>

          <div className='flex items-center gap-2 text-gray-300'>
            <StarIcon className='w-5 h-5 text-primary fill-primary' />
            {show.movie.vote_average.toFixed(1)} UserRating


          </div>
          <p className='text-gray-400 mt-4'>{show.movie.overview}</p>
          <p className='text-gray-300 mt-4'>

            {timeFormat(show.movie.runtime)}.{show.movie.genres.map(genre=>genre.name).join(', ')}.{show.movie.release_date.split('-')[0] }
          </p>
          <p className='text-gray-300'>Language: {show.movie.original_language.toUpperCase()}</p>
          <p className='text-gray-300'>Release Date: {show.movie.release_date}</p>

          <div className='flex items-center flex-wrap gap-4 mt-4'>

            <button className='flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition duration-300 cursor-pointer'>
              <PlayCircle />
               Watch Trailer</button>
            <a href='#dateSelect' className='px-10  py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer active:scale-95'>Buy Tickets</a>
            <button className='bg-gray-700 p-2.5 rounded-full transition cursor-pointer active:scale-95'>
              <Heart className={`w-5 h-5`} />
            </button>
          </div>

          </div>

      </div>

      <p>Movie Cast</p>
      <div className='overflowx-auto no-scrollbar mt-8 pb-4'>
        <div className='flex items-center gap-4 w-max px-4'>
          {
            show.movie.casts.slice(0,12).map((cast,index)=>(
              <div key={index} className='flex flex-col gap-2'>
                <img src={cast.profile_path} alt={cast.name} className='w-20 h-20 rounded-full object-cover aspect-square' />
                <p className='text-sm text-gray-300'>{cast.name}</p>
                <p className='text-xs text-gray-500'>{cast.character}</p>
              </div>

            ))
          } 

        </div>

      </div>
      <DateSelect dateTime={show.dateTime} id={id} />
      <p className='text-gray-500 font-medium text-lg max-w-[960px] mx-auto mt-20 '>Similar Movies</p>
      <div className='flex flex-wrap max-sm:justify-center gap-8'>
        {
          dummyShowsData.slice(0,4).map((movie,inedx)=>(
            <MovieCard key={inedx} movie={movie} />
          ))
        }
      </div>
      <div className='flex justify-center mt-20'>
        <button onClick={()=>{navigate('/movies'); scrollTo(0,0)}} className='px-6 py-3 bg-primary hover:bg-primary-dull rounded-md text-sm font-medium transition cursor-pointer active:scale-95'>Load More</button>
      </div>

    
    </div>
  ) : (
    <div className='h-[80vh]'><Loading /></div>
  )
}

export default MovieDetais
