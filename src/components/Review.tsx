import React from 'react'
import ReviewCards from './ReviewCards'
import Client1 from "@/public/Images/client1.png"
import Client2 from "@/public/Images/client2.png"
import Client3 from "@/public/Images/client3.png"

const card = [
    {
        src: {Client1},
        tutor: "Cameron Williamson",
        qualification: "Web Designer",
        about: "Cameron is an experienced web designer specializing in creating user-friendly interfaces and engaging website designs."
    },
    {
        src: {Client2},
        tutor: "Leslie Alexander",
        qualification: "Frontend Developer",
        about: "Leslie has a strong background in front-end development, focusing on responsive design and seamless user experiences."
    },
    {
        src: {Client3},
        tutor: "Courtney Henry",
        qualification: "UI/UX Designer",
        about: "Courtney is passionate about crafting intuitive and visually appealing user interfaces that enhance user interaction."
    }
];

const Review = () => {
  return (
    <div className=' md:h-[500px] mt-5'>
        {/* text */}
        <div className='w-full'>
            <div className='flex justify-center'>
                <h1 className=' text-2xl md:text-5xl text-zinc-400 font-bold'>What Our Clients Say</h1>
            </div>
            <div className='flex justify-center py-5'>
                <p className='text-gray-500 font-light text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis expedita, eius esse vel deserunt minus! Eius ullam nam eligendi tenetur!</p>
            </div>
        </div>
        {/* cards */}
        <div className='md:flex w-full'>
          {
            card.map((item, index) => (
                <ReviewCards
                    about={item.about}
                    qualification={item.qualification}
                    // src={item.src as any}
                    tutor={item.tutor}
                    key={index}
                 />
            ))
          }  
        </div>
    </div>
  )
}

export default Review