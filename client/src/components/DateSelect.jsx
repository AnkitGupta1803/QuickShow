import React from 'react'
import BlurCircle from './BlurCircle'
import { ChevronLastIcon, ChevronLeftIcon, ChevronRight, ChevronRightIcon } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const DateSelect = ({ dateTime, id }) => {
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();


    const onBookHandler = () => {
        if (!selected) {
            return toast("Please select a date", { type: 'error' });

        }
        navigate(`/movies/${id}/${selected}`);
        scrollTo(0, 0);
    }

    return (


        <div id='dateSelect' className='pt-30'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-10 relative p-8 bg-primary/10 border border-primary/20 rounded-lg'>
                <BlurCircle top="-100px" left="-100px" />
                <BlurCircle top="100px" right="0px" />

                <div>

                    <p className='text-lg font-semibold'>Choose Date</p>
                    <div className='flex items-center gap-6 text-sm mt-5'>

                        <ChevronLeftIcon width={128} />
                        <span className='grid grid-col-3 md:flex flex-wrap md:max-w-lg gap-4'>
                            {
                                Object.keys(dateTime).map((date) => (
                                    <button onClick={() => setSelected(date)} key={date} className={`px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition cursor-pointer active:scale-95 aspect-square + ${selected === date ? "bg-primary text-white" : "border border-primary/70"} `}>
                                        <span>{new Date(date).getDate()}</span>
                                        <span>{new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>


                                    </button>




                                ))
                            }

                        </span>
                        <ChevronRightIcon width={28} />


                    </div>

                </div>
                <button onClick={onBookHandler} className='mt-8 px-6 py-3 bg-primary hover:bg-primary-dull rounded-md text-sm font-medium transition cursor-pointer active:scale-95'>Book Now</button>


            </div>



        </div>
    )
}

export default DateSelect
