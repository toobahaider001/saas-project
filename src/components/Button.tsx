import React from 'react'
interface ButtonProps{
    text:string;
    Secondary?:boolean;
}
const Button:React.FC<ButtonProps> = ({text,Secondary}) => {
  return (
    <button className={`rounded-2xl bg-lightpurple text-white px-4 text-xs py-2 ${Secondary? "bg-transparent":""} ${Secondary? "border-[0.5px]":""} ${Secondary?"border-gray-200/25":""}`}>{text}</button>
)
}

export default Button