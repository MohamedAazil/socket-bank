import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { plans } from '../assets/assets';
import { Context } from '../context/context';

const Book = () => {
  const {slot} = useParams();
  const {pay} = useContext(Context);
  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10">
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6">
        Our Plans
      </button>
      <h1 className="text-center text-3xl font-medium mb-6 sm:mb-10">
        Choose Plan
      </h1>
      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((item, index) => (
          <div
            key={index}
            className="bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500"
          >
            {/* <img src={assets.logo_icon} alt="logo" /> */}
            <p className="mt-3 mb-1 font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className="text-2xl font-medium">
                Rs. {item.price} / {(item.minutes>=60)? `${Math.floor(item.minutes/60)} hr`: `${item.minutes} min`} 
              </span>
            </p>
            <button className="w-full bg-gray-800 rounded-full text-white mt-8 text-sm py-2.5 min-w-52" onClick={()=>pay(slot)}>
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Book