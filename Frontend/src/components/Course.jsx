import React from 'react'
import Cards from './Cards'
import axios from "axios";
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

function Course() {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4000/book")
        console.log(res.data);
        setBook(res.data)        
      } catch (error) {
        console.log(error);        
      }
    }
    getBook();
  }, [])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-16 items-center justify-between text-center'>
            <h1 className='text-2xl md:text-4xl'>We are delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
            <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia autem vitae necessitatibus eaque tempore, molestias animi at ipsa sed non tenetur corporis facilis praesentium ducimus incidunt nam consequatur dignissimos quaerat.
            Vel, quia vitae illo dignissimos quaerat, exercitationem impedit facilis quasi placeat dolor commodi esse, ducimus saepe omnis facere? Saepe nesciunt quae aut consectetur perspiciatis quam enim officiis similique, id impedit.</p>
            
            <Link to='/'>
                <button className='bg-pink-500 text-white px-4 py-2 mt-5 rounded-lg hover:bg-pink-600 duration-200'>Back</button>
            </Link>
        </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-3'>
            {
                book.map((item) => (
                    <Cards key={item.id} item={item} />
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Course