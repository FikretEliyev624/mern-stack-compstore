import React from 'react'
import Card from './Card'

export default function BodyCards() {
  return (
    <div>
      <div className='dark:bg-darkmode transition duration-500'>
      <div className='flex'>
        <Card/>
      </div>
    </div>
    </div>
  )
}
