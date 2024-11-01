import React from 'react'
import Button from './Button'
import Image from 'next/image'
import HeroImage from "@/public/Images/hero.png"

const Hero = () => {
  return (
    <div className='w-full flex flex-col items-center py-10 gap-7'>
            {/* text */}
        <div className='flex flex-col items-center gap-4'>
            <div>
                <h1 className=' text-2xl md:text-5xl font-semibold text-zinc-100  md:px-0 px-9'>A CRM dashboard for engineering teams</h1>
            </div>
            <div className="text-zinc-400 text-xs md:text-sm font-light w-[70%] ">
                  <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam labore nam sunt sequi provident. Quisquam dicta sequi sunt error voluptate nostrum explicabo nihil fuga. Ratione!</p>             
                     </div>
            <div  className='flex gap-4'>
                <Button
                text='Get a demo' />
                <Button 
                text='View pricing ' Secondary/>

            </div>
        </div>
            {/* image */}
        <div className=''>
        <Image 
                className='rounded-xl'
                src={HeroImage}
                alt=''
                height={500}
                width={700}
            />
        </div>
        {/* blue shadow */}
        <div className='absolute h-[40vw] w-[30vw] bg-shadeblue rounded-[20vw] blur-[7vw] -translate-x-[40vw]'>
        </div>
    </div>
  )
}

export default Hero