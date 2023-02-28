import React from 'react'
import Image from 'next/image'

const Courses = () => {
  return (
    <section className='bg-[#00042D] h-screen flex justify-center items-center gap-x-16 text-white'>
    <div className='w-[300px] h-[420px] bg-transparent cursor-pointer'>
        <div className='relative w-full duration-1000'>
            <div className='absolute border-4 w-full h-full'>
               <div className='w-full h-full'> <Image src={"/web.jfif"} width={600} height={600} alt='meta' /></div>


            </div>
        </div>
        
        Courses</div>
    </section>
  )
}

export default Courses