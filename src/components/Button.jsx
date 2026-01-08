import React from 'react'

const Button = ({label,iconUrl ,backgroundColor,borderColor,textColor}) => {
  return (
    <button className={`flex justify-center items-center border rounded-full px-7 py-4 gap-2 font-montserrat text-lg leading-none 
    ${backgroundColor? `${borderColor} ${backgroundColor} ${textColor}`:'bg-coral-red text-white border-[#FF6452]'}
    cursor-pointer`}>
        {label}
       {iconUrl && <img src={iconUrl} alt="icon right" className='rounded-full ml-2 w-5 h-5' />}
    </button>
  )
}

export default Button