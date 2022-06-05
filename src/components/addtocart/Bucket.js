import React from 'react'
import Addtocart from "./Addtocart"
import Total from './Total'
export default function Bucket() {
  return (
    <>

    <div className='dark:bg-darkmode'>
        <Addtocart />
        <Total />
    </div>
    </>
  )
}
