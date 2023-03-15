import React from 'react'
import Image from 'next/image'
import Avatar from './Avatar'

const Creation = () => {
  return (
    <section className='flex justify-center relative'>
    <Image
      className=' z-10 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-96 2xl:h-96 absolute -left-5 -top-20 rotate-[25deg] lg:rotate-[20deg]'
      src='/images/leftHand.png'
      alt='hand'
      width={170}
      height={170}
      
    />
    <Avatar />
    <Image
      className=' z-10 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-96 2xl:h-96 absolute -right-6 -bottom-16 rotate-[28deg] xl:rotate-[25deg] '
      src='/images/rightHand.png'
      alt='hand'
      width={170}
      height={170}
      
    />
  </section>
  )
}

export default Creation