import React from 'react'
import fakeImage1 from '../../assets/MusicCovers/fakeImage1.webp'
import fakeImage2 from '../../assets/MusicCovers/fakeImage2.webp'
import fakeImage3 from '../../assets/MusicCovers/fakeImage3.webp'
function CarrouselImageView() {
  return (
    <div className='w-1/4 h-full flex flex-col items-center justify-center'>
      <div className='w-full h-full flex flex-col items-center justify-center bg-indigo-900/50 rounded-xl'>
      </div>
    </div>
  )
}



export default function MainView() {
  return (
    <div className='w-full h-full flex flex-col items-start justify-start'>
        {/* nav options */}
        <div className='w-3/4 h-1/12 flex flex-row items-center justify-start mt-6 mb-12'>
            <div className='w-11/12 h-full flex flex-row items-center justify-start space-x-12 ml-12'>
                <div className=' h-full flex flex-row items-center justify-center'>
                    <p className='text-white font-mainFont text-5xl'>Featured</p>
                </div>
                <div className=' h-full flex flex-row items-end justify-center'>
                    <p className='text-gray-500 font-mainFont'>Podcasts</p>
                </div>
                <div className=' h-full flex flex-row items-end justify-center'>
                    <p className='text-gray-500 font-mainFont'>New Releases</p>
                </div>
                <div className=' h-full flex flex-row items-end justify-center'>
                    <p className='text-gray-500 font-mainFont'>Charts</p>
                </div>
            </div>
        </div>

        {/* Featured */}
        <div className='w-full h-full flex flex-col items-start justify-start'>
            <div className='w-full h-1/2 flex flex-col items-start justify-start p-12'>
                <div className='w-1/2 h-1/12 flex flex-col items-start justify-start'>
                    <div className='w-full h-1/4 flex flex-row items-start justify-start'>
                        <p className='text-gray-500 font-mediumFont '>Your Featured </p>
                    </div>
                </div>
            {/* name */}

                {/* Carrousel */}
                <div className='w-full h-5/6 flex flex-row items-start justify-start space-x-11 overflow-visible   mt-2'>
                    <CarrouselImageView />
                    <CarrouselImageView />
                    <CarrouselImageView />
                    <CarrouselImageView />
                </div>

                

            </div>


            
        </div>

    </div>
  )
}
