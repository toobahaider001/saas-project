import React from 'react'
import Logo from './Logo'
import Button from './Button'

const Footer = () => {
  return (
    <div className='w-full h-[600px] md:h-[300px] md:flex mt-12  pt-10 md:px-10 border-t-[0.5px]  border-zinc-200/15'>
      {/* left */}
      <div className='md:w-[20%]'>
        {/* logo */}
      <div>
          <Logo />
        </div>
        {/* login */}
        <div className='md:h-[200px] h-[200px] w-[250px] md:w-[300px] rounded-2xl px-3 mt-3 bg-shadeblue flex-col flex justify-center border-[0.5px] border-zinc-200/15'>
          {/* subscribe */}
          <div className='mt-3'>
            <h2 className='md:text-xl text-white'>Subscribe to our new Newsletter</h2>
          </div>
          {/* input */}
          <div className='pt-4'>
            <input type="text" placeholder='Enter your email' className='bg-transparent border-zinc-200/15 border-[0.5px] rounded-xl h-9 w-[200px] text-xs px-2'/>
          </div>
          {/* button */}
          <div className='mt-5'>
            <Button text='Subscribe' />
          </div>
        </div>
      </div>
      {/* right */}
      <div className='md:w-[80%] md:flex-row flex-col flex justify-end text-white md:gap-14 mt-7 md:mt-0'>
    {/* pages */}
        <div  className='flex flex-col gap-4'>
          <div>
            <h2>Pages</h2>
          </div>
          <div className='mt-7 text-sm font-light text-zinc-400'>
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Contact</h4>
            <h4>Blog</h4>
            <h4>Blog post</h4>
            <h4>Pricing</h4>
            <h4>Pricing Single</h4>
          </div>
        </div>
        {/* 2nd */}
        <div  className='flex flex-col gap-4'>
          <div className='mt-12 text-sm font-light text-zinc-400'>
            <h4>Features</h4>
            <h4>Careers</h4>
            <h4>Careers Single</h4>
            <h4>Request a demo</h4>
            <h4>Login</h4>
            <h4>Sign Up</h4>
          </div>
        </div>
        {/* utility */}
        <div className='flex flex-col gap-4'>
          <div>
            <h2>Utility Pages</h2>
          </div>
          <div className='text-sm font-light text-zinc-400'>
            <h4>Style guide</h4>
            <h4>Password protected</h4>
            <h4>404 not found</h4>
            <h4>Licenses</h4>
            <h4>Changelog</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer