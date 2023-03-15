import Head from 'next/head'
import { Inter } from 'next/font/google'
import Avatar from '@/components/Avatar'

export default function Home() {
  return (
    <main className='flex justify-center py-20 '>
      <section className='flex '>
        <Avatar />
      </section>
    </main>
  )
}
