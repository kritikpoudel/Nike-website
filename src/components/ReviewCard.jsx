import React from "react";
import { star } from "../assets/icons";
const ReviewCard = ({ imgURL, customerName, feedback, rating }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-30 h-30"
      />
      <p className="mt-6 text-center info-text max-w-sm">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="rating"
          height={24}
          width={24}
          className="object-contain m-0"
        />
        <p className="text-xl leading-normal text-slate-gray font-montserrat">
          ({rating})
        </p>
      </div>
      <h3 className="mt-1 font-palanquin font-bold text-center text-3xl">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
