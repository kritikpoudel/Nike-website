import React from 'react'

const Button = ({label,iconUrl}) => {
  return (
    <button className='flex justify-center items-center bg-coral-red rounded-full text-white px-7 py-4 gap-2 font-montserrat text-lg leading-none border crusor-pointer '>
        {label}
        <img src={iconUrl} alt="icon right" className='rounded-full ml-2 w-5 h-5' />
    </button>
  )
}

export default Button