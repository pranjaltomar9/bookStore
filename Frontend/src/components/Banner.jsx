import React from 'react'
import banner from '../../public/banner.jpg'

function Banner() {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
            <div className='md:order-1 order-2 w-full md:w-1/2 mt-12 md:mt-24'>
                <div className='space-y-10'>
                    <h1 className='text-4xl font-bold'>Hello, learn something <span className='text-pink-500'>new everyday!!!</span></h1>
                    <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod commodi qui, reiciendis magnam esse nihil cumque facilis, nam nobis, est quam incidunt recusandae tenetur corrupti iusto modi veritatis cupiditate eum!</p>
                    <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    <input type="email" className='dark:text-black' placeholder="Enter your email" required />
                    </label>
                </div>                
                <button className='btn btn-secondary mt-10'>Secondary</button>
            </div>
            <div className='md:order-2 order-1 w-full md:w-1/2'>
                <img src={banner}  className='my-15'/>
            </div>
        </div>
    </>
  )
}

export default Banner