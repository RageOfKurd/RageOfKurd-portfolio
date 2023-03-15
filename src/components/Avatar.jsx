import React from 'react'
import Image from 'next/image'

const Avatar = () => {
  return (
    <div className=' rounded-full p-3 border border-neutral-300'>
        <div className=' rounded-full p-3 border border-neutral-200'>
        <Image
         className='rounded-full border border-neutral-100 sm:w-48 md:w-52 lg:w-56'
         src="/images/avatar.png" 
         height={160} 
         width={160} 
         alt="rageofkurd"/>
        </div>
        </div>
  )
}

export default Avatar