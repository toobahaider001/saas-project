import React from 'react'
interface featureCardprops{
    icon:string,
    title:string,
    description:string
}

const Featurecard:React.FC<featureCardprops> = ({
    icon,
    title,
    description
}
) => {
  return (
    <div className='md:w-[25vw] w-[250px] p-4 md:h-[15vw] border-[0.5px]  border-gray-400/25 gap-2 rounded bg-blue-950/50 md:flex flex-col '>
        {/* icons */}
        <div>{icon}</div>
        {/* title */}
        <div className='text-white text-lg font-medium '>{title}</div>
        {/* description */}
        <div className='text-zinc-400 font-light text-sm'>{description}</div>

    </div>
  )
}

export default Featurecard