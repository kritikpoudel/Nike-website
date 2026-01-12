import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section className='max-container flex justify-between items-center max-lg:flex-col gap-10' id='contact-us'>
        <h2 className='font-palanquin text-4xl font-bold lg:max-w-md leading-17.25 '>Sign Up for <span className='text-[#FF6452]'>Updates</span> & Newsletter</h2>
      <div className='border-[#6D6D6D] flex  w-full lg:max-w-[40%] items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-[#6D6D6D] rounded-full '>
        <input type="text" placeholder='subscribe@nike.com' className='input'/>
        <div className='flex max-sm:w-full max-sm:justify-end items-center'>
      <Button label='Sign Up' fullWidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe