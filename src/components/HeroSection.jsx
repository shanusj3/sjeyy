import React from 'react'
import data from '../db/data'
import ProductCard from './ProductCard'


const HeroSection = () => {
    return (
        <div>
            <div className=' bg-gradient-to-b from-[#673AB8] to-[#673AB8]'>
                <div className='container flex flex-col-reverse md:flex-row mx-auto px-2 h-screen sm:px-6'>
                    <div className='w-full md:w-1/2   h-full flex flex-col gap-4 justify-center  items-center md:items-start'>
                        <h1 className='text-5xl md:text-7xl font-extrabold text-white text-center md:text-left'>THIS SEASON'S <br />FRESH FITS</h1>
                        <p className='font-bold text-center md:text-left md:text-xl md:max-w-md text-white'>Step into the new year with a wardrobe refresh that brings out</p>
                        <button className='p-3 w-full md:max-w-56 text-lg  rounded-full bg-white'>shop</button>

                    </div>
                    <div className='hidden w-full relative md:flex items-center justify-center  md:w-1/2'>
                        <div className='h-44 w-52 hidden xl:block -rotate-12 shadow-xl shadow-gray-800 xl:top-96 xl:left-2 absolute bg-white p-2 rounded-lg'>
                            <img src='https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg' className='w-48 h-36' alt="" />
                        </div>
                        <div className='h-44 w-52 hidden xl:block absolute rotate-12 shadow-gray-800 shadow-xl xl:top-24 xl:left-72 bg-white p-2 rounded-lg'>
                            <img src='https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg' className='w-48 h-36' alt="" />
                        </div>
                        <div className='h-44 w-52 xl:bottom-24 shadow-gray-800 rotate-6 shadow-xl xl:right-2 absolute bg-white p-2 rounded-lg'>
                            <img src='https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg' className='w-48 h-36' alt="" />
                        </div>
                    </div>


                </div>


            </div>
            <div className='mt-9 p-2 flex flex-col md:flex-row w-full gap-2  container mx-auto'>
                <div className='relative w-full bg-no-repeat bg-cover bg-center h-screen md:w-1/2 bg-[url(https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_500,c_limit/cdc1c9a4-3d79-4aac-8715-1457818cfb85/nike-just-do-it.png)]'>
                    <div className='absolute bottom-9 left-3 flex flex-col gap-3'>
                        <p className='md:text-xl md:font-medium text-white'>Retro Running Shoes</p>
                        <h4 className='md:text-3xl font-bold text-white'>That Early-2000s Vibe</h4>
                        <button className='p-3 rounded-full bg-white '>Shope</button>
                    </div>
                </div>
                <div className='relative w-full bg-no-repeat bg-cover bg-center h-screen md:w-1/2 bg-[url(https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_500,c_limit/d1942648-cc25-476d-af9d-f0a99b1345cb/nike-just-do-it.png)]'>
                    <div className='absolute bottom-9 left-3 flex flex-col gap-3'>
                        <p className='md:text-xl font-medium text-white'>Retro Running Shoes</p>
                        <h4 className='md:text-3xl font-bold text-white'>That Early-2000s Vibe</h4>
                        <button className='p-3 rounded-full bg-white '>Shope</button>
                    </div>
                </div>
            </div >
            <div className='container gap-2 p-2 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 '>
                {
                    data && data.length > 0 ?
                        data.map((item) => (
                            <ProductCard product={item} key={item.title} />
                        ))
                        : null
                }
            </div>
        </div>
    )
}

export default HeroSection
