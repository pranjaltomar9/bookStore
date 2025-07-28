import React from 'react'
import freebooks from '../../public/freebooks.jpg'

function Cards({item}) {
  return (
    <>
        <div className='mt-3 my-3 p-3'>
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-110 duration-400 dark:bg-slate-700 dark:text-white dark:border">
        <figure>
            <img
            src={freebooks}
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="badge badge-outline hover:text-white hover:bg-pink-500 duration-200">Get Now</div>
            </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default Cards