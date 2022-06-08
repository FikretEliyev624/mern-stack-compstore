import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeAll } from '../../app/features/cart/cartSlice'


export default function Total() {
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.cart)


  const totalPrice = useMemo(() => {
    return products.reduce((total, sub) => (sub?.Price * sub.count) + total, 0)
  }, [products])


  return (
    <>
      <div className='h-28 dark:bg-darkmode'>
        <div>
        <p className='text-2xl my-2 text-center ml-36 dark:text-white'>Cart totals</p>
        <div className='flex bg-slate-500 h-16'>
            <p className='ml-[600px] mr-28 my-4 text-xl dark:text-white'>Total</p>
            <div className='flex'>
            <div className='border-l border-2'></div>
            <p className='ml-28 mr-3 my-4 text-xl dark:text-white'>{totalPrice}</p>
            <p className='my-4 text-xl dark:text-white'>AZN</p>
            </div>
        </div>
       
        </div>
        
        </div>
        <div className='mt-8 flex'>
            <button className='px-3 py-2 ml-[600px]  rounded-lg text-white  bg-green-600 hover:bg-midnight'>Buy All</button>
            <button onClick={() => dispatch(removeAll())} className='px-3 py-2  mx-32 rounded-lg text-white  bg-red-600 hover:bg-pink-500 '>Remove All</button>
        </div>
    </>
  )
}
