import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <section className='flex flex-col justify-center items-center mt-28 md:mt-32 gap-10 md:gap-16'>
    <h1 className='text-3xl md:text-4xl font-bold text-center text-neutral-500'>Projects I built</h1>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
      
  <article className='flex flex-col gap-1'>
      <Image
  className='border' 
  src='/images/bnchina.png'
  alt='hand'
  width={300}
  height={300}
  
        />
        <div className='flex gap-2'>
          <a href='https://www.instagram.com/bnchina/' className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-4 py-2 rounded text-neutral-50 font-bold'>instagram</a>
        </div>
      </article>

      <article className='flex flex-col gap-1'>
      <Image
  className='border' 
  src='/images/dyarnama.png'
  alt='hand'
  width={300}
  height={300}
  
        />
        <div className='flex gap-2'>
          <a href='https://www.instagram.com/dyarnama.app/' className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-4 py-2 rounded text-neutral-50 font-bold'>instagram</a>
          <a href='https://dyarnama.com/' className='bg-gradient-to-r from-blue-400  to-blue-500 px-4 py-2 rounded text-neutral-50 font-bold'>website</a>
        </div>
      </article>

      <article className='flex flex-col gap-1'>
      <Image
  className='border' 
  src='/images/rickandmorty.png'
  alt='hand'
  width={300}
  height={300}
  
        />
        <div className='flex gap-2'>
          <a href='https://rickandhevar.netlify.app/' className='bg-gradient-to-r from-blue-400  to-blue-500 px-4 py-2 rounded text-neutral-50 font-bold'>website</a>
          <a href='https://github.com/RageOfKurd/rickandhevar-react' className='bg-gradient-to-r from-neutral-500  to-neutral-600 px-4 py-2 rounded text-neutral-50 font-bold'>Github</a>
          
        </div>
      </article>
      
      
 
    </div>
    </section>
  )
}

export default Projects