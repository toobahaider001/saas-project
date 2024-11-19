import React from 'react'
import Logo from './Logo'
import Button from './Button'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex justify-between items-center py-5 border-b-[0.5px] border-zinc-400/15'>
      <div>
        <Logo />
      </div>
      <div className=' hidden md:flex gap-4 text-zinc-300 font-light text-sm '>
      <Link href={"/"}>Home</Link>
      <Link href={"/features"}>features</Link>
      <Link href={"/contact"}>Contact</Link>
      </div>
      <div>
        <Button text='Get a demo' />
      </div>
    </div>
  )
}

export default Header