import Image from 'next/image';
import React from 'react';
import { FaCalendarPlus } from 'react-icons/fa';
import { IoDocumentSharp } from 'react-icons/io5';
import { MdOutlineAttachEmail } from 'react-icons/md';
import { VscFileSubmodule } from 'react-icons/vsc';
import Inbox from "@/public/Images/inbox.png";
import Application from "@/public/Images/application.png";
import File from "@/public/Images/file.png";
import Button from './Button';

const Essential = () => {
  return (
    <div className='py-10 w-full flex flex-col items-center gap-8'> 
        <div className='text-center'>
            <h1 className='md:text-5xl text-xl font-bold text-zinc-400'>
                Essential apps that protect your
            </h1>
            <div className='flex justify-center items-center gap-2 md:gap-7 text-zinc-400 py-5 md:text-2xl'>
                <MdOutlineAttachEmail size={15} color='white'/>
                <h5>Email,</h5>
                <FaCalendarPlus size={15} color='white'/>
                <h5>Events,</h5>
                <VscFileSubmodule size={15} color='white'/>
                <h5>Files,</h5>
                <IoDocumentSharp size={15} color='white'/>
                <h5>Documents</h5>
            </div>
        </div>

        {/* Images */}
        <div className='w-full flex flex-col items-center gap-4'>
            {/* Upper Image */}
            <div>
                <Image
                    src={Inbox}
                    alt=''
                    width={700}
                    height={500}
                    className=''
                 />
            </div>
            {/* Lower Images with Equal Heights */}
            <div className='flex flex-col md:flex-row gap-2 items-center'>
                <div className='flex justify-center'>
                    <Image
                        src={Application}
                        alt=''
                        height={300}
                        width={300}
                        className='object-cover md:h-[300px] h-full w-full'
                    />
                </div>
                <div className='flex justify-center'>
                    <Image
                        src={File}
                        alt=''
                        height={300}
                        width={500}
                        className='object-cover md:h-[300px] h-full w-[420px]'
                    />
                </div>
            </div>
        </div>
        {/* Buttons */}
        <div className='flex justify-center gap-6'>
            <Button text='Get Started' />
            <Button text='Browse all features' Secondary/>
        </div>
    </div>
  );
}

export default Essential;
