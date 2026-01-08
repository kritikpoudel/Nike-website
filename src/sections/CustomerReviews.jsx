import React from 'react'
import ReviewCard from '../components/ReviewCard'
import { reviews } from '../constants'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='text-center text-4xl font-palanquin font-bold'>
        What Our <span className='text-[#FF6452]'>Customer</span> Say?
      </h3>
      <p className='info-text text-center max-w-lg m-auto mt-4 '>Our customers share honest feedback based on their real experiences with our products.</p>
       <div className='mt-24 flex flex-1 justify-evenly max-lg:flex-col gap-14 items-center'>
             {reviews.map((review)=>(
              <ReviewCard key={review.customerName} imgURL={review.imgURL} rating={review.rating} feedback={review.feedback} customerName={review.customerName}/>
             ))}
       </div>
    </section>
  )
}

export default CustomerReviews