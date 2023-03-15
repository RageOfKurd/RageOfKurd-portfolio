import React from 'react'

const TitleSection = () => {
  return (
    <section className='flex flex-col gap-2 sm:gap-3 lg:gap-5 justify-center items-center mt-8 lg:mt-12'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl  font-bold text-center text-neutral-500'>Hello, I'm <span className='font-bold text-neutral-700'>Hevar</span></h1>
        <p className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-center text-neutral-400'>passionate Software Engineer</p>
      </section>
  )
}

export default TitleSection