import React from 'react'
import myimage from "./img/photo_2022-06-05_12-58-21.jpg"
export default function About() {
  return (
    <>
      <div className='flex justify-center dark:bg-darkmode transition duration-500'>
        <div className='mx-12'>
          <img className='w-80 h-72 my-11 animate-pulse' src={myimage} alt=''/>
        </div>
        <div className='mx-12'>
            <p className='text-5xl animate-pulse dark:text-green-400 font-bold mt-11 mb-3 text-lime-600'>About us</p>
            <p className='text-3xl animate-pulse dark:text-indigo-400 font-bold text-pink-600'>Web developer</p>
            <p className='text-xl animate-pulse dark:text-orange-300 font-bold text-amber-500'>My Name is Fikret.I am from Astara</p>
            <p className='dark:text-lime-50 my-1 animate-pulse text-cyan-500 font-bold'>Skillls</p>
            <ul className='list-none'>
              <li className='mx-2 animate-pulse dark:text-warning text-red-700 font-bold'>Javascript</li>
              <li className='mx-2 animate-pulse dark:text-warning text-red-700 font-bold'>React</li>
              <li className='mx-2 animate-pulse dark:text-warning text-red-700 font-bold'>Node js</li>
              <li className='mx-2 animate-pulse dark:text-warning text-red-700 font-bold'>Express</li>
              <li className='mx-2 animate-pulse dark:text-warning text-red-700 font-bold'>MongoDb</li>
            </ul>
        </div>
      </div>



    </>
  )
}
