'use client';

import Image from 'next/image';

interface CardProps {
  image: string;
  time: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, time, title, description }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-[#EBF4F6] flex flex-col h-[250px]"> 
      <div className="relative w-full h-40">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover" 
        />

        <div className="absolute -bottom-6 left-0 bg-white bg-opacity-70 rounded-2xl w-max mx-3 mb-2 p-1.5">
          <span className="text-[#E90A0A] text-sm font-semibold">{time}</span>
        </div>
      </div>
      <div className="p-3 pt-6 bg-[#EBF4F6] flex flex-col flex-grow">
        <h3 className="text-lg font-bold mt-1 truncate" title={title}>{title}</h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-3" title={description}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
