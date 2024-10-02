import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function header() {
  return (
    <div className='flex justify-between items-center p-5 shadow-sm'>
        <Image src ={'/favicon.svg'} width={50} height={50} />
        <UserButton/>
    </div>
  )
}

export default header