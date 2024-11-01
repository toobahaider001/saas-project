import { features } from '@/data/Features'
import React from 'react'
import Featurecard from './Featurecard'

const Features = () => {
  return (
    <div className='w-full flex flex-col items-center md:py-10 gap-14 py-12'>
        {/* text */}
        <div className='md:flex justify-between md:px-14'>
            <div className='md:w-[70%] w-full'>
                <h1 className='text-zinc-100 md:text-5xl text-2xl font-medium'>Powerful features to help you <br />manage you all leads </h1>
            </div>
            <div className='md:w-[30%] w-[80%] md:py-0 py-9 mx-4'>
                <p className='text-zinc-400  text-xs md:text-sm  text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eaque at, totam sint cupiditate blanditiis impedit et iusto perspiciatis consectetur quisquam beatae optio atque natus cum quo. Beatae numquam odit voluptatibus aperiam. Consequuntur, esse dignissimos.</p>
            </div>
        </div>
        {/* cards */}
        <div className='grid md:grid-cols-3 gap-5  '>
          {
            features.map((feature,index)=> (
              <Featurecard 
              key={index}
              icon={feature.icon as any}
              title={feature.title}
              description={feature.description}/>
            ))
          }
        </div>
    </div>
  )
}

export default Features