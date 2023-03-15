import Head from 'next/head'
import { Inter } from 'next/font/google'
import Creation from '../components/Creation'
import TitleSection from '@/components/TitleSection'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className='flex flex-col jurstify-cente pt-20 overflow-hidden'>
      <Creation />
      <TitleSection />
      <Projects />
      <Footer />
    </main>
  )
}
