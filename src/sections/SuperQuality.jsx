import React from 'react'
import Button from "../components/Button";
import{shoe8} from"../assets/images" 
const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex-1 flex flex-col'>
        <h2 className='font-palanquin text-4xl font-bold lg:max-w-lg'>We Provide <span className='text-[#FF6452]'>Super Quality </span>Shoes</h2>
        <p className='info-text lg:max-w-lg mt-4'>We provide super quality shoes crafted with premium materials for durability and comfort. Designed with modern aesthetics and advanced cushioning, our footwear supports all-day wear. Each pair delivers the perfect balance of style, flexibility, and performance.</p>
        <p className='info-text lg:max-w-lg mt-6'>Whether for daily use or active movement, our shoes offer reliable support and lasting comfort. Made to move with your lifestyle.</p>
        <div className='mt-11'>
        <Button label="view details"/>
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img src={shoe8} alt="shoe8" height={522} width={570}  className='object-contain'/>
      </div>
    </section>
  )
}

export default SuperQuality