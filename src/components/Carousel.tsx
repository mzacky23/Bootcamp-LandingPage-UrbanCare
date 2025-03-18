'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from './Card';

const data = [
  {
    title: 'Tumpukan Sampah Kota Malang',
    description: 'Dampak berbahaya secara tingkat sarana aktual',
    image: '/sampah.png',
    time: '3 Days Ago',
  },
  {
    title: 'Pengrajin Sampah Plastik',
    description: 'Menciptakan kerajinan dari sampah menjadi sesuatu yang berguna',
    image: '/pengrajin.png',
    time: '3 Days Ago',
  },
  {
    title: 'Kreativitas Limbah Sampah Besi',
    description: 'Mengolah limbah besi menjadi kerajinan unik',
    image: '/hasil-sampah.png',
    time: '3 Days Ago',
  },
  {
    title: 'Penyebab Banjir dari Sampah',
    description: 'Dampak banjir akibat tumpukan sampah pada sungai',
    image: '/banjir.png',
    time: '3 Days Ago',
  },
];

const Carousel = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="py-4"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="flex"> 
            <Card
              image={item.image}
              time={item.time}
              title={item.title}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;