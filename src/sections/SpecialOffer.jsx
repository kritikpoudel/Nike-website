import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center max-lg:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt=""
          height={773}
          width={687}
          className="object-contain w-full"
        />
      </div>
      <div className="lex-1 flex flex-col">
        <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg">
          <span className="text-[#FF6452]">Special</span> Offer
        </h2>
        <p className="info-text lg:max-w-lg mt-4">
          Enjoy exclusive deals on our premium shoe collections for a limited
          time. Get top-quality footwear at prices you don’t want to miss.
        </p>
        <p className="info-text lg:max-w-lg mt-6">
          Upgrade your style and comfort today with special discounts available
          only for a short period. Shop now before the offer ends.
        </p>
        <div className="flex mt-11 flex-wrap gap-4">
          <Button label="Shop Now" iconUrl={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-[#6D6D6D]"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
