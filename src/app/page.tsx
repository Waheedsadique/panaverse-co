import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from './components/hero'
import Leader from './components/Leader'
import Courses from './components/Courses'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
    <HeroSection/>
    <Leader/>
    {/* <Courses/> */}
    </div>
  )
}
