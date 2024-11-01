import React from 'react'
interface cards{
    // src:string,
    tutor:string,
    qualification:string,
    about:string
}


const ReviewCards:React.FC<cards> = ({
    // src,
    tutor,
    qualification,
    about
}) => {
  return (
    <div className=' w-full md:h-[700px] my-5 md:my-[100px] flex justify-center '>
            {/* <div>
                <Image 
                // src={src} alt=''
                height={200}
                width={200}/>
    </div> */}
    <div className=' rounded-xl h-[200px] bg-blue-950/50 md:h-[250px] md:w-[350px] px-6 pt-6 border-gray-400/25 '>
        <h3 className=' text-lg md:text-2xl text-gray-400'>{tutor}</h3>
        <h6 className='font-light text-gray-600'>{qualification}</h6>
        <p className='text-gray-300 md:w-[300px]'>{about}</p>
    </div>
    </div>
  )
}

export default ReviewCards