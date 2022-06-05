import React from 'react'
import { FiEdit } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import card from "../home/Carousel/img/2.png"
export default function Addtocart() {
  return (
    <>    
    <div>
          <div className="relative mb-10 overflow-x-auto shadow-md dark:bg-darkmode rounded-lg">
    <table className="w-full mt-28 text-sm text-left text-gray-500 dark:text-white">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
            <tr>
                <th scope="col" className="px-6 py-3">
                    
                </th>
                <th scope="col" className="px-8 py-3">
                    Product
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Total
                </th>
                <th scope="col" className="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                    <span></span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                <img src={card} className='my-5 h-[30px]' alt=''/>
                </th>
                <td className="px-6 py-4">
                  ASUS TUF GAMING A17 FA706IC-HX006 90NR0675-M000T0
                </td>
                <td className="px-6 py-4">
                    <span className="mx-1">2139.00</span>
                    <span>AZN</span>
                </td>
                <td className="px-6 py-4">
                    <span className="mx-1">2139.00</span>
                    <span>AZN</span>
                </td>
                <td className="px-6 py-4">
                    <input type="text" className="w-20 text-3xl px-2 py-2 text-midnight h-9 focus:outline-sky "/>
                </td>
                <td className="px-6 py-9 text-right  flex">
                    <a href="/#" className="text-sky hover:text-blue-300 "><FiEdit size={25} /></a>
                    <a href="/#" className="text-red-600 hover:text-red-400 dark:text-red-300 dark:hover:text-red-400 "><MdDeleteForever size={25} /></a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</div>
    </>
  )
}
