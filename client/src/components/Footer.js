import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { SiAsus } from 'react-icons/si';
import { SiLenovo } from 'react-icons/si';
import { SiDell } from 'react-icons/si';

export default function Footer() {
  return (
    <>
        <div className='h-[700px] dark:bg-darkmode transition duration-500'>
          <ul className='flex'>
            <li>
              <ul className='flex mx-6 my-40'>
                  <li className='mx-3 text-[#4267B2] dark:hover:text-blue-600 dark:text-cyan-500 hover:text-teal-400'><BsFacebook size={45} /></li>
                  <li className='mx-3 text-[#833AB4] dark:hover:text-pink-400  dark:text-fuchsia-800 hover:text-purple'><BsInstagram size={45} /></li>
                  <li className='mx-3 text-[#00acee] dark:hover:text-blue-200 dark:text-cyan-200 hover:text-indigo-400'><BsTwitter size={45} /></li>
                  <li className='mx-3 text-[#25D366] dark:hover:text-lime-500 dark:text-green-300 hover:text-green-600'><BsWhatsapp size={45} /></li>
              </ul>
            </li>
            <li>
          <ul className='flex ml-96 my-40'>
            <li className='mx-3 dark:text-teal-200 dark:hover:text-indigo-400 hover:text-cyan-200 text-blue-600'><SiAsus size={100} /></li>
            <li className='mx-3 dark:text-pink-400 dark:hover:text-rose-400 hover:text-pink-600 text-red-500'><SiLenovo size={100} /></li>
            <li className='mx-3 dark:text-lime-600 dark:hover:text-teal-500 hover:text-lime-500 text-green-500'><SiDell size={100} /></li>
              </ul>
            </li>
          </ul>
          <div className='flex'>
          <p className='text-6xl hover:text-lime-500 dark:hover:text-warning font-satisfy dark:text-white text-blue-800 ml-5'>by Fikrat Aliyev</p>
          <p className='ml-11 hover:text-lime-500 dark:hover:text-warning font-serif text-xl dark:text-white text-blue-800'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et blanditiis amet nesciunt tempora eveniet at animi, aut nihil veniam nobis reprehenderit itaque! Molestiae veritatis quos aperiam iure illo porro quia?
            Natus, quidem consectetur molestias eveniet similique voluptatibus quo sed eum, blanditiis eligendi possimus, non et commodi omnis porro minus vel atque aliquid quae. Veritatis magni provident vero dicta, recusandae incidunt.
            Nulla nobis sequi earum corporis molestiae perspiciatis distinctio eligendi vero vel blanditiis nostrum accusamus, est error itaque omnis debitis sit repellendus doloremque, ipsum tempora modi illum eius cupiditate maiores. Esse.</p>
      </div>
        </div>
    </>
  )
}
