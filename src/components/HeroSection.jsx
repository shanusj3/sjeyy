import React from 'react'
import HeroImg from '/images/heroimg.png'

const HeroSection = () => {
    return (
        <div>
            <div className=' bg-gradient-to-b from-[#673AB8] to-[#673AB8]'>
                <div className='container flex flex-col-reverse md:flex-row mx-auto px-2 h-screen sm:px-6'>
                    <div className='w-full md:w-1/2   h-full flex flex-col gap-4 justify-center  items-center md:items-start'>
                        <h1 className='md:text-7xl font-extrabold text-white text-center md:text-left'>THIS SEASON'S <br />FRESH FITS</h1>
                        <p className='font-bold text-xl md:max-w-md text-white'>Step into the new year with a wardrobe refresh that brings out</p>
                        <button className='p-3 w-full md:max-w-56 text-lg  rounded-full bg-white'>shop</button>

                    </div>
                    <div className='w-full h-full md:w-1/2 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url("/images/heroimg.png")` }}>

                    </div>


                </div>


            </div>
            <div className='flex flex-col md:flex-row w-full gap-2'>
                <div className='w-full h-screen md:w-1/2 bg-[url(https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_500,c_limit/cdc1c9a4-3d79-4aac-8715-1457818cfb85/nike-just-do-it.png)]'></div>
                <div className='w-full h-screen md:w-1/2 bg-[url(https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_500,c_limit/d1942648-cc25-476d-af9d-f0a99b1345cb/nike-just-do-it.png)]'></div>
            </div >
        </div>
    )
}

export default HeroSection
