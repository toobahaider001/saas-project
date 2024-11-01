import Image from 'next/image'
import React from 'react'
import DiscordImag from "@/public/Images/discord.png"
const Discord = () => {
  return (
    <div className=' flex justify-center mt-[70px] md:mt-[100px]'>
        <div>
          <Image 
          src={DiscordImag}
          alt=''
          height={400}
          width={800}
          />
        </div>
    </div>
  )
}

export default Discord