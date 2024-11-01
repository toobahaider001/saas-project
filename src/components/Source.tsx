import Image from 'next/image'
import React from 'react'
import Audited from "@/public/Images/source.png"
const Source = () => {
  return (
        <div className='flex justify-center py-12'>
            <Image
            src={Audited}
            alt=''
            height={1000}
            width={1000}
            className='rounded-xl' />
        </div>
  )
}

export default Source