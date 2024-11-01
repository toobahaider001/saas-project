import React from 'react'
import Logo from './Logo'
import Button from './Button'

const Header = () => {
  return (
    <div className='flex justify-between items-center py-5 border-b-[0.5px] border-zinc-400/15'>
      <div>
        <Logo />
      </div>
      <div className=' hidden md:flex gap-4 text-zinc-300 font-light text-sm '>
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Pricing</h4>
      <h4>Features</h4>
      <h4>Blog</h4>
      </div>
      <div>
        <Button text='Get a demo' />
      </div>
    </div>
  )
}

export default Header